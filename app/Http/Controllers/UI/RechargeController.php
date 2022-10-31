<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\RechargeOrderRequest;
use App\Services\UI\RechargeService;

class RechargeController extends Controller
{
    public function __construct(RechargeService $recharegeService)
    {
        $this->recharegeService = $recharegeService;
    }

    public function index()
    {
        return $this->recharegeService->getAll();
    }

    public function rechargeOrder(RechargeOrderRequest $request)
    {
        $this->recharegeService->rechargeOrder($request);

        return ['boxId' => $request->boxId];
    }
}
