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
        $result = $this->model->create([
           'user_id' => auth()->user()->id,
           'gift_box_id' => $box->id,
           'times' => $times,
           'amount' => ($box->price * $times),
        ]);
        $ret = [
            'orderId' => intval($result->id),
            'boxId' => $result->gift_box_id,
            'times' => $times,
            'coinNotEnough' => (bool) (intval(auth()->user()->money) < intval($result->amount)),
        ];

        return $ret;
    }
}
