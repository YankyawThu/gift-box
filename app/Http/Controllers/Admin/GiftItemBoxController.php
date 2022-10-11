<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\GiftItemBox\CreateRequest;
use App\Services\Admin\GiftItemBoxService;

class GiftItemBoxController extends Controller
{
    public function __construct(GiftItemBoxService $giftBoxService)
    {
        $this->giftBoxService = $giftBoxService;
    }

    public function index()
    {
        $this->giftBoxService->getAll();
    }

    public function store(CreateRequest $request)
    {
        $this->giftBoxService->store($request);

        return redirect()->back();
    }

    public function update(CreateRequest $request)
    {
        $this->giftBoxService->update($request);

        return redirect()->back();
    }
}
