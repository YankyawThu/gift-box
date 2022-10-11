<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GiftBox extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(BoxCategory::class, 'category_id');
    }

    public function giftItemBox()
    {
        return $this->hasMany(GiftItemBox::class);
    }
}
