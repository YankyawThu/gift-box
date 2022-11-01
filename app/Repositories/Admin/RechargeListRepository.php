<?php

namespace App\Repositories\Admin;

use App\Models\RechargeList;
use App\Repositories\BaseRepository;

class RechargeListRepository extends BaseRepository
{
    public function __construct(RechargeList $model)
    {
        $this->model = $model;
    }
}
