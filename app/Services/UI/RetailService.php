<?php

namespace App\Services\UI;

use App\Repositories\UI\RetailRepository;

class RetailService
{
    public function __construct(RetailRepository $retailRepo)
    {
        $this->retailRepo = $retailRepo;
    }

    public function getTotalCoin()
    {
        return $this->retailRepo->getTotalCoin();
    }
}
