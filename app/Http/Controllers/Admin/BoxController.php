<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\GiftBox\CreateRequest;
use App\Http\Requests\GiftBox\UpdateRequest;
use App\Services\Admin\BoxCategoryService;
use App\Services\Admin\BoxService;
use App\Services\Admin\ItemService;
use Illuminate\Http\Request;

class BoxController extends Controller
{
    public function __construct(BoxService $boxService, BoxCategoryService $boxCateService, ItemService $itemService)
    {
        $this->boxService = $boxService;
        $this->boxCateService = $boxCateService;
        $this->itemService = $itemService;
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
        $data = $this->boxService->getDetail($id);
        $items = $this->itemService->getAll();

        return view('admin.boxItem.index', compact('data', 'items'));
    }

    public function edit($id)
    {
        $this->boxService->getDetail($id);

        return;
    }

    public function update(UpdateRequest $request, $id)
    {
        $this->boxService->update($request, $request->id);

        return redirect()->back()->with('status', 'Box Updated Successfully!');
    }

    public function destroy($id, Request $request)
    {
        $this->boxService->delete($request->id);

        return redirect()->back()->with('status', 'Box Deleted Successfully!');
    }
}
