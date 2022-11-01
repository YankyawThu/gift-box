<?php

namespace App\Repositories\Admin;

use App\Models\RechargeOrder;
use App\Repositories\BaseRepository;

class RechargeOrderRepository extends BaseRepository
{
    public function __construct(RechargeOrder $model)
    {
        $this->model = $model;
    }
}
