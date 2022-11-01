<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderListRequest;
use App\Services\UI\OrderService;

class OrderController extends Controller
{
    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function index(OrderListRequest $request)
    {
        return $this->orderService->getOrders($request);
    }
}
