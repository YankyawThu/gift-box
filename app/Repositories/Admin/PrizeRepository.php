<?php

namespace App\Repositories\Admin;

use App\Models\GiftPrizeRecord;
use App\Repositories\BaseRepository;

class PrizeRepository extends BaseRepository
{
    public function __construct(GiftPrizeRecord $model)
    {
        $this->model = $model;
    }
}
