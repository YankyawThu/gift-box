<?php

namespace App\Services\UI;

use App\Repositories\UI\RetailRepository;

class RetailService
{
    public function __construct(RetailRepository $retailRepo)
    {
        $this->retailRepo = $retailRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getTotalCoin()
    {
        return $this->retailRepo->getTotalCoin();
    }

    public function getRetailList()
    {
        return $this->retailRepo->getRetailList($this->itemPerPage);
    }

    public function getTeamList()
    {
        return $this->retailRepo->getTeamList($this->itemPerPage);
    }
}
