<?php

namespace App\Services\UI;

use App\Repositories\UI\RechargeRepository;

class RechargeService
{
    public function __construct(RechargeRepository $rechargeRepo)
    {
        $this->rechargeRepo = $rechargeRepo;
    }

    public function getAll()
    {
        return $this->rechargeRepo->get();
    }

    public function rechargeOrder($request)
    {
        return $this->rechargeRepo->rechargeOrder($request);
    }

}
