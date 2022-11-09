<?php

namespace App\Filters\UI;

use App\Filters\Filter;

class GiftBoxFilter extends Filter
{
    protected $filters = ['name', 'price'];

    public function name($value)
    {
        return $this->builder->where('name', 'LIKE', "%{$value}%");
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
