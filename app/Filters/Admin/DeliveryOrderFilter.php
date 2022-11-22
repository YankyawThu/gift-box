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
        return $this->builder->where('delivery_order_no', 'like', "%{$value}%");
    }

    public function address($value)
    {
        return $this->builder->where('address', 'like', "%{$value}%");
    }

    public function delivery_time($value)
    {
        $date = splitDaterange($value);

        return $this->builder->whereDate('delivery_time', '>=', date('Y-m-d', strtotime($date['from'])))
            ->whereDate('delivery_time', '<=', date('Y-m-d', strtotime($date['to'])));
    }

    public function receive_time($value)
    {
        $date = splitDaterange($value);

        return $this->builder->whereDate('receive_time', '>=', date('Y-m-d', strtotime($date['from'])))
            ->whereDate('receive_time', '<=', date('Y-m-d', strtotime($date['to'])));
    }

    public function status($value)
    {
        return $this->builder->where('status', $value);
    }
}
