<?php

namespace App\Filters;

class BoxCategoryFilter extends Filter
{
    protected $filters = ['name'];

    public function name($value)
    {
        return $this->builder->where('name', 'LIKE', "%{$value}%");
    }
}
