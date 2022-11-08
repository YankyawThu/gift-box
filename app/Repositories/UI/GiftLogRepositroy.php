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
        $rmb_price = round(getRmbFromCoin($box->coin ?: 0), 2);
        $result = $this->model->create([
           'user_id' => auth()->user()->id,
           'gift_box_id' => $box->id,
           'coin_price' => $box->coin,
           'rmb_price' => $rmb_price,
           'coin_amount' => $box->coin * $times,
           'rmb_amount' => $rmb_price * $times,
           'times' => $times,
           'out_trade_no' => date('YmdHis').mt_rand(10000, 99999),
        ]);

        return $result;
    }
}
