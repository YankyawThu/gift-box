<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function township()
    {
        return $this->belongsTo(Township::class, 'township_id');
    }
}
