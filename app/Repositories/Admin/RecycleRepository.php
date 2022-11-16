<?php

namespace App\Repositories\Admin;

use App\Models\Recycle;
use App\Repositories\BaseRepository;

class RecycleRepository extends BaseRepository
{
    public function __construct(Recycle $model)
    {
        $this->model = $model;
    }
}
