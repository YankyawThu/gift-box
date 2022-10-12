<?php

namespace App\Services\Admin;

use App\Repositories\Admin\GiftLogRepository;

class GiftLogService
{
    public function __construct(GiftLogRepository $giftLogRepo)
    {
        $this->giftLogRepo = $giftLogRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll($filter)
    {
        return $this->giftLogRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }
}
