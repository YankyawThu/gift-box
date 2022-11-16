<?php

namespace App\Repositories\UI;

use App\Models\GiftPrizeRecord;
use App\Repositories\BaseRepository;

class CollectionRepository extends BaseRepository
{
    public function __construct(GiftPrizeRecord $model)
    {
        $this->model = $model;
    }

    public function getCollection($perPage)
    {
        return $this->model->where('user_id', auth()->user()->id)->where('is_collect', 1)->orderBy('id', 'DESC')->paginate($perPage);
    }
}
