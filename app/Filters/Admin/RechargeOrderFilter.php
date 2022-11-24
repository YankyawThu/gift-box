<?php

namespace App\Filters\Admin;

use App\Filters\Filter;

class RechargeOrderFilter extends Filter
{
    protected $filters = ['name', 'amount', 'rmb_amount', 'transaction_id', 'pay_method', 'status'];

    public function name($value)
    {
        return $this->builder->whereHas(
            'user',
            function ($query) use ($value) {
                $query->where('name', 'like', "%$value%");
            }
        );
    }

    public function amount($value)
    {
        return $this->builder->where('amount', $value);
    }

    public function out_trade_no($value)
    {
        return $this->builder->where('out_trade_number', 'like', "%$value%");
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
