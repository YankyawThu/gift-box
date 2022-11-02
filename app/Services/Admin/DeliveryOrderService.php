<?php

namespace App\Services\Admin;

use App\Repositories\Admin\DeliveryOrderRepository;

class DeliveryOrderService
{
    private $deliveryOrderRepo;
    public function __construct(DeliveryOrderRepository $deliveryOrderRepo)
    {
        $this->deliveryOrderRepo = $deliveryOrderRepo;
        $this->itemPerPage = config('enums.itemPerPage');
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
        $data['post_id'] = $request['post_id'];
        $data['delivery_number'] = $request['delivery_number'];
        $data['status'] = config('config.deliveryStatus.2');

        return $this->deliveryOrderRepo->update($data, $id);
    }
}
