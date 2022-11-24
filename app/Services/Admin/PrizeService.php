<?php

namespace App\Services\Admin;

use App\Repositories\Admin\PrizeRepository;

class PrizeService
{
    public function __construct(PrizeRepository $prizeRepo)
    {
        $this->prizeRepo = $prizeRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll($filter)
    {
        return $this->prizeRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }
}
