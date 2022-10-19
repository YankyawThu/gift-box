<?php

namespace App\Repositories\UI;

use App\Models\GiftItem;
use App\Repositories\BaseRepository;

class ItemRepository extends BaseRepository
{
    public function __construct(GiftItem $model)
    {
        $this->model = $model;
    }

    public function updateQty($id)
    {
        return $this->model->where('id', $id)->decrement('qty');
    }
    public function getById($id)
    {
        return $this->model->where('id', $id)->first();
    }
}
