<?php

namespace App\Http\Controllers\Admin;

use App\Filters\Admin\DeliveryOrderFilter;
use App\Http\Controllers\Controller;
use App\Models\Admin\Post;
use App\Services\Admin\DeliveryOrderService;
use Illuminate\Http\Request;

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

        $unReadTotal = $this->deliveryOrderService->getUnReadCount();

        $posts = Post::all();

        return view('admin.delivery_orders.index', compact('data', 'posts', 'unReadTotal'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\DeliveryOrderUpdateRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->deliveryOrderService->update($request, $id);

        return redirect()->back()->with('status', 'Delivery Order Updated Successfully!');
    }

    public function updateUnRead(Request $request)
    {
        if (request()->ajax()) {
            $this->deliveryOrderService->updateUnread(['backend_read' => 1], $request->id);

            return response()->json([
                'status' => 200,
                'data' => $this->deliveryOrderService->getUnReadCount(),
            ]);
        }
    }
}
