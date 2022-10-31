<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\GiftItemBox\CreateRequest;
use App\Services\Admin\BoxCategoryService;
use App\Services\Admin\GiftItemBoxService;
use App\Services\Admin\ItemService;

class GiftItemBoxController extends Controller
{
    private $giftBoxService, $itemService, $boxCateService;
    public function __construct(GiftItemBoxService $giftBoxService, ItemService $itemService, BoxCategoryService $boxCateService)
    {
        $this->giftBoxService = $giftBoxService;
        $this->itemService = $itemService;
        $this->boxCateService = $boxCateService;
    }

    public function store(CreateRequest $request)
    {
        $this->giftBoxService->store($request);

        return redirect()->back();
    }

    public function edit($id)
    {
        return view(
            'admin.boxitem.edit',
            [
                'data' => $this->giftBoxService->getDetail($id),
                'items' => $this->itemService->getItems(),
                'categories' => $this->boxCateService->getAllNoPaginated()
            ]
        );
    }

    public function update(CreateRequest $request)
    {
        return $this->giftBoxService->update($request);
    }

    public function getItems($id)
    {
        $items = $this->itemService->getItems();

        return response()->json($items);
    }
}
