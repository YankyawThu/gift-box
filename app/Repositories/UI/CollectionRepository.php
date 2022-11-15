<?php

namespace App\Repositories\UI;

use App\Models\PendingDeliver;
use App\Repositories\BaseRepository;

class CollectionRepository extends BaseRepository
{
    public function __construct(PendingDeliver $model)
    {
        $this->model = $model;
    }

    public function getCollection($perPage)
    {
        return $this->model->where('user_id', auth()->user()->id)->groupBy('gift_box_id')->orderBy('id', 'DESC')->paginate($perPage);
    }
}
