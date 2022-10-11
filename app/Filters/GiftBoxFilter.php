<?php

namespace App\Filters;

class BoxCategoryFilter extends Filter
{
    protected $filters = ['name', 'category_id'];

    public function name($value)
    {
        return $this->builder->where('name', 'LIKE', "%{$value}%");
    }

    public function category_id($value)
    {
        return $this->builder->where('category_id', $value);
    }
}
