<?php

namespace App\Filters\UI;

use App\Filters\Filter;

class GiftBoxFilter extends Filter
{
    protected $filters = ['name', 'new', 'price'];

    public function name($value)
    {
        return $this->builder->where('name', 'LIKE', "%{$value}%");
    }

    public function new($value)
    {
        if ($value == 'desc') {
            return $this->builder->orderBy('id', 'desc');
        } else {
            return $this->builder->orderBy('id', 'asc');
        }
    }

    public function price($value)
    {
        if ($value == 'desc') {
            return $this->builder->orderBy('price', 'desc');
        } else {
            return $this->builder->orderBy('price', 'asc');
        }
    }
}
