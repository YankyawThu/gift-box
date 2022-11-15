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

    public function savePrizeRecycle($request)
    {
        return $this->prizeRepo->savePrizeRecycle($request);
    }

    public function shipmentApply($request)
    {
        return $this->prizeRepo->shipmentApply($request);
    }

    public function collect($request)
    {
        return $this->prizeRepo->collect($request);
    }
}
