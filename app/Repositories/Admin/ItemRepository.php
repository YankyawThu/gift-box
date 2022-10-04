<?php

namespace App\Repositories\Admin;

use App\Models\GiftItem;
use App\Repositories\BaseRepository;

class ItemRepository extends BaseRepository
{
    public function __construct(GiftItem $model)
    {
        $this->model = $model;
    }
}