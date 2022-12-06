<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MoneyRecord extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function scopeFilter($query, $filters)
    {
        $filters->apply($query);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
