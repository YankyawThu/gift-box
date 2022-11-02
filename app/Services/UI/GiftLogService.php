<?php

namespace App\Services\UI;

use App\Repositories\UI\GiftLogRepositroy;

class GiftLogService
{
    public function __construct(GiftLogRepositroy $giftLogRepo)
    {
        $this->giftLogRepo = $giftLogRepo;
    }

    public function store($box, $times)
    {
        return $this->giftLogRepo->store($box, $times);
    }

    public function getById($id)
    {
        return $this->giftLogRepo->getById($id);
    }
}
