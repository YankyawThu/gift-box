<?php

namespace App\Services\Admin;

use App\Repositories\Admin\WalletRepository;

class WalletService
{
    public function __construct(WalletRepository $walletRepo)
    {
        $this->walletRepo = $walletRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll($filter)
    {
        return $this->walletRepo->getWallet($this->itemPerPage, $filter);
    }

    public function confirm($request)
    {
        return $this->walletRepo->confirm($request);
    }
}
