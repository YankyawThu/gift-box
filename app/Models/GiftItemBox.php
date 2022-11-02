<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GiftItemBox extends Model
{
    protected $guarded = [];

    public function giftItems()
    {
        return $this->belongsTo(GiftItem::class, 'gift_item_id');
    }

    public function giftBoxes()
    {
        return $this->belongsTo(GiftBox::class, 'gift_box_id');
    }
}
