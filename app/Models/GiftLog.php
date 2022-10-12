<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class GiftLog extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function giftItemBox()
    {
        return $this->belongsTo(GiftItemBox::class, 'gift_item_box_id');
    }

    public function scopeFilter($query, $filters)
    {
        $filters->apply($query);
    }
}
