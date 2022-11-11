<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
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
}
