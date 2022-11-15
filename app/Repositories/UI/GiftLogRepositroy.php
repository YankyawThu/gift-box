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
           'gift_box_name' => $box->name,
           'gift_box_image' => $box->image,
           'price' => $box->price,
           'total_amount' => $box->price * $times,
           'times' => $times,
           'out_trade_no' => date('YmdHis').mt_rand(10000, 99999),
        ]);

        return $result;
    }
}
