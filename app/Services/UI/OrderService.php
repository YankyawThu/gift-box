<?php

namespace App\Services\UI;

use App\Repositories\UI\OrderRepository;

class OrderService
{
    public function __construct(OrderRepository $orderRepo)
    {
        $this->orderRepo = $orderRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getOrders($request)
    {
        return $this->orderRepo->getOrders($request, $this->itemPerPage);
    }
}
