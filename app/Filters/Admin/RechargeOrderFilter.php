<?php

namespace App\Filters\Admin;

use App\Filters\Filter;

class RechargeOrderFilter extends Filter
{
    protected $filters = ['name', 'coin_amount', 'rmb_amount', 'transaction_id', 'pay_method', 'status'];

    public function name($value)
    {
        return $this->builder->whereHas(
            'user',
            function ($query) use ($value) {
                $query->where('name', 'like', "%$value%");
            }
        );
    }

    public function coin_amount($value)
    {
        return $this->builder->where('coin_amount', '>', $value);
    }

    public function rmb_amount($value)
    {
        return $this->builder->where('rmb_amount', '>', $value);
    }

    public function transaction_id($value)
    {
        return $this->builder->where('transaction_id', 'like', "%$value%");
    }

    public function pay_method($value)
    {
        return $this->builder->where('pay_method', $value);
    }

    public function status($value)
    {
        return $this->builder->where('status', $value);
    }
}
