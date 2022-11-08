<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GiftPrizeRecord extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function giftItem()
    {
        return $this->belongsTo(GiftItem::class, 'gift_item_id');
    }

    public function giftLog()
    {
        return $this->belongsTo(GiftLog::class, 'gift_log_id');
    }
}
