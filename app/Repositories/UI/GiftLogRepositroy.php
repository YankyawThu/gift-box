<?php

namespace App\Repositories\UI;

use App\Models\GiftLog;
use App\Repositories\BaseRepository;

class GiftLogRepositroy extends BaseRepository
{
    public function __construct(GiftLog $model)
    {
        $this->model = $model;
    }

    public function store($box, $times)
    {
        return $this->model->create([
            'user_id' => auth()->user()->id,
            'gift_box_id' => $box->id,
            'times' => $times,
            'amount' => ($box->price * $times),
        ]);
    }
}
