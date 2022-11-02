<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RechargeList extends Model
{
    protected $guarded = [];

    public function scopeFilter($query, $filters)
    {
        $filters->apply($query);
    }
}
