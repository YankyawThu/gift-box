<?php

namespace App\Filters\Admin;

use App\Filters\Filter;

class BannerFilter extends Filter
{
    protected $filters = ['place', 'type', 'status'];

    public function place($value)
    {
        return $this->builder->where('place', $value);
    }

    public function type($value)
    {
        return $this->builder->where('type', $value);
    }

    public function status($value)
    {
        return $this->builder->where('status', $value);
    }
}
