<?php

namespace App\Http\Controllers\Admin;

use App\Filters\GiftLogFilter;
use App\Http\Controllers\Controller;
use App\Services\Admin\GiftLogService;
use Illuminate\Http\Request;

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

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
