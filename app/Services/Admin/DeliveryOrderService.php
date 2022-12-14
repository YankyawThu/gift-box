<?php

namespace App\Services\Admin;

use App\Models\MoneyRecord;
use App\Repositories\Admin\DeliveryOrderRepository;
use App\Repositories\Admin\UserRepository;
use App\User;

class DeliveryOrderService
{
    private $deliveryOrderRepo;

    public function __construct(DeliveryOrderRepository $deliveryOrderRepo, UserRepository $userRepo)
    {
        $this->deliveryOrderRepo = $deliveryOrderRepo;
        $this->itemPerPage = config('enums.itemPerPage');
        $this->userRepo = $userRepo;
    }

    public function getAll($filter)
    {
        return $this->deliveryOrderRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }

    public function allItems()
    {
        return $this->deliveryOrderRepo->getPaginated();
    }

    public function getDetail($id)
    {
        return $this->deliveryOrderRepo->getById($id);
    }

    public function update($request, $id)
    {
        // $data['post_id'] = $request['post_id'];
        // $data['delivery_number'] = $request['delivery_number'];

        if ($request->status == 'finished') {
            $order = $this->deliveryOrderRepo->getById($request->id);
            $amount = optional(optional($order->giftPrize)->giftItem)->delivery_fee;
            User::where('id', $order->user_id)->decrement('money', $amount);
            $user = $this->userRepo->getById($order->user_id);
            MoneyRecord::where('user_id', $user->id)->where('type', 'deliver')->where('order_id', $request->id)->update(
                [
                    'after' => $user->money,
                    'status' => 'approved',
                ]
            );
        }

        $data['status'] = $request->status;

        return $this->deliveryOrderRepo->update($data, $request->id);
    }

    public function getUnReadCount()
    {
        return $this->deliveryOrderRepo->getDataByField('backend_read', 0)->count();
    }

    public function updateUnread($data, $id)
    {
        return $this->deliveryOrderRepo->update($data, $id);
    }
}
