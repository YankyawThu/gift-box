<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GiftBox extends Model
{
    use SoftDeletes;

    protected $guarded = [];
}
