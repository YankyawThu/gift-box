<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DeliveryOrder extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function giftPrize()
    {
        return $this->belongsTo(GiftPrizeRecord::class, 'gift_prize_id');
    }
}
