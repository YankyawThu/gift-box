<?php

namespace App\Filters\Admin;

use App\Filters\Filter;

class AdminFilter extends Filter
{
    protected $filters = ['username', 'email', 'nickname'];

    public function name($value)
    {
        return $this->builder->where('username', 'LIKE', "%$value%");
    }

    public function email($value)
    {
        return $this->builder->where('email', $value);
    }

    public function nickname($value)
    {
        return $this->builder->where('nickname', $value);
    }

    // public function amount($value)
    // {
    //     if ($value) {
    //         return $this->builder->whereHas('amount', function ($q) use ($value) {
    //             $q->where('user_amounts.amount', $value);
    //         });
    //     }
    // }
}
