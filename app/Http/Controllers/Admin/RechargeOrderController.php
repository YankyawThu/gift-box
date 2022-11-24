<?php

namespace App\Http\Controllers\Admin;

use App\Filters\Admin\RechargeOrderFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\RechargeCreateRequest;
use App\Models\RechargeList;
use App\Services\Admin\RechargeOrderService;
use Illuminate\Http\Request;

class RechargeOrderController extends Controller
{
    private $rechargeOrderService;

    public function __construct(RechargeOrderService $recharge)
    {
        $this->rechargeOrderService = $recharge;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(RechargeOrderFilter $filter)
    {
        $data = $this->rechargeOrderService->getAll($filter);

        return view('admin.recharge_orders.index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\RechargeCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(RechargeCreateRequest $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(RechargeList $rechargeList)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(RechargeList $rechargeList)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\RechargeUpdateRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->rechargeOrderService->paymentConfirm($request, $id);

        return redirect()->back()->with('status', 'Payment Confirm Successful.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(RechargeList $rechargeList)
    {
    }
}
