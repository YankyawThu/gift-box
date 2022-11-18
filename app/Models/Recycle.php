<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Recycle extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function giftBox()
    {
        return $this->belongsTo(GiftBox::class, 'gift_box_id');
    }

    public function giftItem()
    {
        return $this->belongsTo(GiftItem::class, 'gift_item_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function scopeFilter($query, $filters)
    {
        $filters->apply($query);
    }
}
