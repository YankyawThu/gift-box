<?php

namespace App\Repositories\Admin;

use App\Models\GiftBox;
use App\Repositories\BaseRepository;

class BoxRepository extends BaseRepository
{
    public function __construct(GiftBox $model)
    {
        $this->model = $model;
    }
}
