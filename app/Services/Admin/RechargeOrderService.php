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

    public function paymentConfirm($request, $id)
    {
        $info = $this->rechargeListRepo->getById($id);
        if (!$info->user) {
            return redirect()->back()->with('status', 'User not found!');
        }

        $money_before = $info->user->money;

        User::where('id', $info->user_id)->increment('money', $request->pay_amount);

        MoneyRecord::create([
            'user_id' => auth()->user()->id,
            'before' => $money_before,
            'after' => $info->user->money,
            'money' => $request->pay_amount,
            'type' => 'recharge',
        ]);
        $data['status'] = $request->status;
        $data['pay_amount'] = $request->pay_amount;

        return $this->rechargeListRepo->update($data, $id);
    }
}
