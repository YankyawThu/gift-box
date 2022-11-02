<?php

namespace App\Filters\Admin;

use App\Filters\Filter;

class DeliveryOrderFilter extends Filter
{
    protected $filters = ['name', 'order_number', 'address', 'delivery_time', 'receive_time', 'status'];

    public function name($value)
    {
        return $this->builder->whereHas(
            'user',
            function ($query) use ($value) {
                $query->where('name', 'like', "%$value%");
            }
        );
    }

    public function order_number($value)
    {
        return $this->builder->where('order_number', 'like', "%{$value}%");
    }

    public function address($value)
    {
        return $this->builder->whereHas('address', function ($query) use ($value) {
            $query->where('address', 'like', "%{$value}%");
        });
    }

    public function delivery_time($value)
    {
        return $this->builder->where('delivery_time', "$value");
    }

    public function receive_time($value)
    {
        return $this->builder->where('receive_time', "$value");
    }

    public function status($value)
    {
        return $this->builder->where('status', $value);
    }
}
