<?php

namespace App\Filters;

class GiftItemFilter extends Filter
{
    protected $filters = ['name'];

    public function name($value)
    {
        return $this->builder->where('name', 'LIKE', "%{$value}%");
    }
}
