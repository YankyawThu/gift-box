<?php

namespace App\Filters\Admin;

use App\Filters\Filter;

class RechargeListFilter extends Filter
{
    protected $filters = ['amount'];

    public function amount($value)
    {
        return $this->builder->where('amounty', '>', "%$value%");
    }
}
