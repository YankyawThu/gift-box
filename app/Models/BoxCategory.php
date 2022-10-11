<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BoxCategory extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function scopeFilter($query, $filters)
    {
        $filters->apply($query);
    }
}
