<?php

namespace App\Http\Controllers\Admin;

use App\Filters\Admin\RechargeListFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\RechargeCreateRequest;
use App\Http\Requests\Admin\RechargeUpdateRequest;
use App\Models\RechargeList;
use App\Services\Admin\RechargeListService;
use Illuminate\Http\Request;

class RechargeListController extends Controller
{
    private $rechargeListService;
    public function __construct(RechargeListService $rechargeListService)
    {
        $this->rechargeListService = $rechargeListService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(RechargeListFilter $filter)
    {
        $data = $this->rechargeListService->getAll($filter);

        return view('admin.recharge_lists.index', compact('data'));
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
        $this->rechargeListService->store($request->validated());

        return redirect()->back()->with('status', 'Recharge Created Successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RechargeList  $rechargeList
     * @return \Illuminate\Http\Response
     */
    public function show(RechargeList $rechargeList)
    {
        $this->rechargeListService->getDetail($rechargeList);

        return redirect()->back();
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
        $this->rechargeListService->update($request->validated(), $rechargeList->id);

        return redirect()->back()->with('status', 'Recharge Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RechargeList  $rechargeList
     * @return \Illuminate\Http\Response
     */
    public function destroy(RechargeList $rechargeList)
    {
        $this->rechargeListService->delete($rechargeList->id);

        return redirect()->back()->with('status', 'Recharge Deleted Successfully!');
    }
}
