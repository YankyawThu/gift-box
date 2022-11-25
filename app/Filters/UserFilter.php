<?php

namespace App\Filters;

class UserFilter extends Filter
{
    protected $filters = ['name', 'money', 'nickname', 'phone'];

    public function name($value)
    {
        return $this->builder->where('name', 'LIKE', "%{$value}%");
    }

    public function money($value)
    {
        if ($value) {
            return $this->builder->where('money', '>=', $value);
        }
    }

    public function nickname($value)
    {
        return $this->builder->where('nickname', 'LIKE', "%{$value}%");
    }

    public function phone($value)
    {
        return $this->builder->where('phone', $value);
    }
}
