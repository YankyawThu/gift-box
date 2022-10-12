<?php

namespace App\Filters;

class UserFilter extends Filter
{
    protected $filters = ['name', 'email', 'amount'];

    public function name($value)
    {
        return $this->builder->where('users.name', 'LIKE', "%$value%");
    }

    public function email($value)
    {
        return $this->builder->where('users.email', $value);
    }

    public function amount($value)
    {
        if ($value) {
            return $this->builder->whereHas('amount', function ($q) use ($value) {
                $q->where('user_amounts.amount', $value);
            });
        }
    }
}
