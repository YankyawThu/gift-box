<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Http\Controllers\Controller;
use App\Services\Admin\ItemService;

class ItemController extends Controller
{
    public function __construct(ItemService $itemService)
    {
        $this->itemService = $itemService;
    }

    public function index()
    {
        $data = $this->itemService->getAll();
        return view('admin.item.index', ['data' => $data]);
    }
}
