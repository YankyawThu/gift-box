<?php

namespace App\Http\Controllers\Admin;

use App\Filters\Admin\GiftPrizeFilter;
use App\Http\Controllers\Controller;
use App\Services\Admin\PrizeService;

class PrizeController extends Controller
{
    public function __construct(PrizeService $prizeService)
    {
        $this->prizeService = $prizeService;
    }

    public function index(GiftPrizeFilter $filter)
    {
        $prize = $this->prizeService->getAll($filter);

        return view('admin.prizes.index', compact('prize'));
    }
}
