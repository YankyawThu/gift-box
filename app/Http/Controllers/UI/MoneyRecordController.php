<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\MoneyRecordRequest;
use App\Http\Resources\MoneyRecordResourceCollection;
use App\Services\UI\MoneyRecordService;

class MoneyRecordController extends Controller
{
    public function __construct(MoneyRecordService $moneyRecordService)
    {
        $this->moneyRecordService = $moneyRecordService;
    }

    public function getMyBalance(MoneyRecordRequest $request)
    {
        return response()->json(new MoneyRecordResourceCollection($this->moneyRecordService->getMyBalance($request)));
    }
}
