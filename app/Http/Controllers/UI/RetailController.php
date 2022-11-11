<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Resources\RetailResourceCollection;
use App\Services\UI\RetailService;

class RetailController extends Controller
{
    public function __construct(RetailService $retailService)
    {
        $this->retailService = $retailService;
    }

    public function getTotalCoin()
    {
        return $this->retailService->getTotalCoin();
    }

    public function getRetailList()
    {
        return new RetailResourceCollection($this->retailService->getRetailList());
    }

    public function getTeamList()
    {
        return new TeamListResourceCollection($this->retailService->getTeamList());
    }
}
