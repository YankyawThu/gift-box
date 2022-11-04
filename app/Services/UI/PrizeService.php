<?php

namespace App\Services\UI;

use App\Repositories\UI\PrizeRepository;

class PrizeService
{
    public function __construct(PrizeRepository $prizeRepo)
    {
        $this->prizeRepo = $prizeRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function store($goodsInfo, $log)
    {
        return $this->prizeRepo->store($goodsInfo, $log);
    }

    public function getBoxCabinet($request)
    {
        return $this->prizeRepo->getBoxCabinet($request, $this->itemPerPage);
    }
}
