<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderListRequest;
use App\Http\Resources\OrderListResourceCollection;
use App\Services\UI\OrderService;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function index()
    {
        return Inertia::render('Shipping');
    }

    public function getAll(OrderListRequest $request)
    {
        $data = new OrderListResourceCollection($this->orderService->getOrders($request));
        return response()->json($data);
    }
}
