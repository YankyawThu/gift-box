<?php

namespace App\Repositories\Admin;

use App\Models\GiftLog;
use App\Repositories\BaseRepository;

class GiftLogRepository extends BaseRepository
{
    public function __construct(GiftLog $model)
    {
        $this->model = $model;
    }
}
