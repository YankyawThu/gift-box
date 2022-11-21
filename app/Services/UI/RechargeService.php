<?php

namespace App\Services\UI;

use App\Models\MoneyRecord;
use App\Repositories\UI\RechargeRepository;
use App\Repositories\UI\UserRepository;

class RechargeService
{
    public function __construct(RechargeRepository $rechargeRepo, UserRepository $userRepo)
    {
        $this->rechargeRepo = $rechargeRepo;
        $this->userRepo = $userRepo;
    }

    public function getAll()
    {
        return $this->rechargeRepo->get();
    }

    public function rechargeOrder($request)
    {
        $money_before = auth()->user()->money;
        $this->userRepo->increaseMoney($request->amount);
        MoneyRecord::create([
            'user_id' => auth()->user()->id,
            'before' => $money_before,
            'after' => auth()->user()->money,
            'money' => $request->amount,
            'type' => 'recharge',
        ]);

        return $this->rechargeRepo->rechargeOrder($request);
    }
}
