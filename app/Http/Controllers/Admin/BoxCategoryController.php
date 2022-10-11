<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BoxCategory\CreateRequest;
use Illuminate\Http\Request;
use App\Services\Admin\BoxCategoryService;

class BoxCategoryController extends Controller
{
    public function __construct(BoxCategoryService $boxCatService)
    {
        $this->boxCatService = $boxCatService;
    }

    public function index()
    {
        $data = $this->boxCatService->getAll();

        return view('admin.category.index', compact('data'));
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
    public function store(CreateRequest $request)
    {
        $this->boxCatService->store($request->all());

        return redirect()->back()->with('status', 'Category Created Successfully!');
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
    public function update(CreateRequest $request, $id)
    {
        $this->boxCatService->update($request->all(), $request->id);

        return redirect()->back()->with('status', 'Category Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        $this->boxCatService->destroy($request->id);

        return redirect()->back()->with('status', 'Category Deleted Successfully!');
    }
}
