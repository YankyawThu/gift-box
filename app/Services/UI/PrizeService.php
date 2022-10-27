<?php

namespace App\Services\UI;

use App\Repositories\UI\PrizeRepository;

class PrizeService
{
    public function __construct(PrizeRepository $prizeRepo)
    {
        $this->prizeRepo = $prizeRepo;
    }

    public function store($goodsInfo, $log)
    {
        return $this->prizeRepo->store($goodsInfo,$log);
    }
}
