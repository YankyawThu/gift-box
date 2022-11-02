<?php

namespace App\Repositories\Admin;

use App\Models\DeliveryOrder;
use App\Models\RechargeOrder;
use App\Repositories\BaseRepository;

class DeliveryOrderRepository extends BaseRepository
{
    public function __construct(DeliveryOrder $model)
    {
        $this->model = $model;
    }
}
