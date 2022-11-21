<?php

namespace App\Services\UI;

use App\Repositories\UI\MoneyRecordRepository;

class MoneyRecordService
{
    public function __construct(MoneyRecordRepository $moneyRecordRepo)
    {
        $this->moneyRecordRepo = $moneyRecordRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getMyBalance($request)
    {
        return $this->moneyRecordRepo->getMyBalance($request, $this->itemPerPage);
    }
}
