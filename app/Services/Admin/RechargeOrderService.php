<?php

namespace App\Services\Admin;

use App\Models\MoneyRecord;
use App\Repositories\Admin\RechargeOrderRepository;
use App\User;

class RechargeOrderService
{
    private $rechargeListRepo;

    public function __construct(RechargeOrderRepository $rechargeListRepo)
    {
        $this->rechargeListRepo = $rechargeListRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll($filter)
    {
        return $this->rechargeListRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }

    public function allItems()
    {
        return $this->rechargeListRepo->getPaginated();
    }

    public function getDetail($id)
    {
        return $this->rechargeListRepo->getById($id);
    }

    public function paymentConfirm($request)
    {
        $info = $this->rechargeListRepo->getById($request->id);
        if (!$info->user) {
            return redirect()->back()->with('status', 'User not found!');
        }

        if ($request->status == 'paid') {
            $money_before = $info->user->money;
            User::where('id', $info->user_id)->increment('money', $request->pay_amount);
            $user = User::where('id', $info->user_id)->first();
            MoneyRecord::where('user_id', $info->user_id)->where('type', 'deposit')->where('order_id', $request->id)->update(
                [
                    'after' => $user->money,
                    'money' => $request->pay_amount,
                    'status' => 'approved',
                ]
            );

            $data['status'] = $request->status;
            $data['pay_amount'] = $request->pay_amount;
        } else {
            $data['status'] = $request->status;
            $user = User::where('id', $info->user_id)->first();
            MoneyRecord::where('user_id', $info->user_id)->where('type', 'deposit')->where('order_id', $request->id)->update(
                [
                    'after' => $user->money,
                    'money' => $info->amount,
                    'status' => $request->status,
                ]
            );
        }

        return $this->rechargeListRepo->update($data, $request->id);
    }
}
