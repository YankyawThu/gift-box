<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\GiftItemBox\CreateRequest;
use App\Services\Admin\GiftItemBoxService;
use App\Services\Admin\ItemService;

class GiftItemBoxController extends Controller
{
    public function __construct(GiftItemBoxService $giftBoxService, ItemService $itemService)
    {
        $this->giftBoxService = $giftBoxService;
        $this->itemService = $itemService;
    }

    public function store(CreateRequest $request)
    {
        $this->giftBoxService->store($request);

        return redirect()->back();
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
