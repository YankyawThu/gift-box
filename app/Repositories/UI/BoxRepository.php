<?php

namespace App\Repositories\UI;

use App\Models\GiftBox;
use App\Repositories\BaseRepository;

class BoxRepository extends BaseRepository
{
    public function __construct(GiftBox $model)
    {
        $this->model = $model;
    }

    public function increaseSale($boxId, $times)
    {
        return $this->model->where('id', $boxId)->increment('sale', $times);
    }
}
