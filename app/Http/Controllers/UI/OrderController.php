<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderListRequest;
use App\Http\Resources\OrderListResourceCollection;
use App\Services\UI\OrderService;

class OrderController extends Controller
{
    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function index(OrderListRequest $request)
    {
        return new OrderListResourceCollection($this->orderService->getOrders($request));
    }
}
