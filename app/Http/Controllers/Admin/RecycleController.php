<?php

namespace App\Http\Controllers\Admin;

use App\Filters\UI\RecycleOrderFilter;
use App\Http\Controllers\Controller;
use App\Services\Admin\RecycleService;
use Illuminate\Http\Request;

class RecycleController extends Controller
{
    public function __construct(RecycleService $recycleService)
    {
        $this->recycleService = $recycleService;
    }

    public function index(RecycleOrderFilter $filter)
    {
        $data = $this->recycleService->getAll($filter);

        return view('admin.recycle.index', compact('data'));
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
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->recycleService->update($request, $id);

        return redirect()->back()->with('status', 'Success.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }
}
