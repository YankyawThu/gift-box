<?php

namespace App\Http\Controllers\Admin;

use App\Filters\GiftLogFilter;
use App\Http\Controllers\Controller;
use App\Services\Admin\GiftLogService;

class GiftLogController extends Controller
{
    public function __construct(GiftLogService $giftLogService)
    {
        $this->giftLogService = $giftLogService;
    }

    public function index(GiftLogFilter $filter)
    {
        $data = $this->giftLogService->getAll($filter);

        return view('admin.giftlog.index', compact('data'));
    }
}
