<?php

namespace App\Services\Admin;

use App\Repositories\Admin\RechargeOrderRepository;

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
        $data['status'] = $request->status;

        return $this->rechargeListRepo->update($data, $id);
    }
}
