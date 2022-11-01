<?php

namespace App\Http\Controllers\Admin;

use App\Filters\Admin\RechargeListFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\RechargeCreateRequest;
use App\Http\Requests\Admin\RechargeUpdateRequest;
use App\Models\RechargeList;
use App\Services\Admin\rechargeOrderService;

class RechargeOrderController extends Controller
{
    private $rechargeOrderService;
    public function __construct(rechargeOrderService $recharge)
    {
        $this->rechargeOrderService = $recharge;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(RechargeListFilter $filter)
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\RechargeCreateRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RechargeCreateRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RechargeList  $rechargeList
     * @return \Illuminate\Http\Response
     */
    public function show(RechargeList $rechargeList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RechargeList  $rechargeList
     * @return \Illuminate\Http\Response
     */
    public function edit(RechargeList $rechargeList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\RechargeUpdateRequest  $request
     * @param  \App\Models\RechargeList  $rechargeList
     * @return \Illuminate\Http\Response
     */
    public function update(RechargeUpdateRequest $request, RechargeList $rechargeList)
    {
      //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RechargeList  $rechargeList
     * @return \Illuminate\Http\Response
     */
    public function destroy(RechargeList $rechargeList)
    {
        //
    }
}
