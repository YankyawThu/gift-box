<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\RechargeOrderRequest;
use App\Services\UI\RechargeService;
use Inertia\Inertia;

class RechargeController extends Controller
{
    public function __construct(RechargeService $rechargeService)
    {
        $this->rechargeService = $rechargeService;
    }

    public function index()
    {
        $data = $this->rechargeService->getAll();

        return Inertia::render('Recharge', ['data' => $data]);
    }

    public function rechargeOrder(RechargeOrderRequest $request)
    {
        $this->rechargeService->rechargeOrder($request);

        return true;
    }

    public function payment($amount)
    {
        $data = config('config.payMethod');
        return Inertia::render('Payment', ['amount' => $amount, 'data' => $data]);
    }
}
