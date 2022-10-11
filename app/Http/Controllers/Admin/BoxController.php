<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\GiftBox\CreateRequest;
use App\Http\Requests\GiftBox\UpdateRequest;
use App\Services\Admin\BoxCategoryService;
use App\Services\Admin\BoxService;
use Illuminate\Http\Request;

class BoxController extends Controller
{
    public function __construct(BoxService $boxService, BoxCategoryService $boxCateService)
    {
        $this->boxService = $boxService;
        $this->boxCateService = $boxCateService;
    }

    public function index()
    {
        $categories = $this->boxCateService->getAllNoPaginated();
        $data = $this->boxService->getAll();

        return view('admin.box.index', compact('data', 'categories'));
    }

    public function create()
    {
    }

    public function store(CreateRequest $request)
    {
        $this->boxService->store($request);

        return redirect()->back()->with('status', 'Box Created Successfully!');
    }

    public function show($id)
    {
        return $this->boxService->getDetail($id);
    }

    public function edit($id)
    {
        $this->boxService->getDetail($id);

        return;
    }

    public function update(UpdateRequest $request, $id)
    {
        $this->boxService->update($request, $id);

        return redirect()->back()->with('status', 'Box Updated Successfully!');
    }

    public function destroy($id, Request $request)
    {
        $this->boxService->delete($id);

        return redirect()->back()->with('status', 'Box Deleted Successfully!');
    }
}
