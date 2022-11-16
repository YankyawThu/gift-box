<?php

namespace App\Services\UI;

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
        $this->userRepo->increaseMoney($request->amount);
        return $this->rechargeRepo->rechargeOrder($request);
    }

}
