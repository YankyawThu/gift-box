<?php

namespace App\Http\Controllers\Admin;

use App\Filters\Admin\DeliveryOrderFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\DeliveryOrderUpdateRequest;
use App\Models\Admin\Post;
use App\Models\DeliveryOrder;
use App\Services\Admin\DeliveryOrderService;

class DeliveryOrderController extends Controller
{
    private $deliveryOrderService;
    public function __construct(DeliveryOrderService $recharge)
    {
        $this->deliveryOrderService = $recharge;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(DeliveryOrderFilter $filter)
    {
        $data = $this->deliveryOrderService->getAll($filter);

        $posts = Post::all();

        return view('admin.delivery_orders.index', compact('data', 'posts'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\DeliveryOrderUpdateRequest  $request
     * @param  \App\Models\DeliveryOrder  $DeliveryOrder
     * @return \Illuminate\Http\Response
     */
    public function update(DeliveryOrderUpdateRequest $request, DeliveryOrder $DeliveryOrder)
    {
        $this->deliveryOrderService->update($request->validated(), $DeliveryOrder->id);

        return redirect()->back()->with('status', 'Delivery Order Updated Successfully!');
    }
}
