<?php

namespace App\Filters\Admin;

use App\Filters\Filter;

class GiftPrizeFilter extends Filter
{
    protected $filters = ['id', 'out_trade_no', 'name', 'nickname', 'mobile', 'gift_item_name', 'status', 'exchange_time', 'delivery_time'];

    public function id($value)
    {
        return $this->builder->where('id', $value);
    }

    public function name($value)
    {
        return $this->builder->whereHas(
            'user',
            function ($query) use ($value) {
                $query->where('name', 'like', "%$value%");
            }
        );
    }

    public function nickname($value)
    {
        return $this->builder->whereHas(
            'user',
            function ($query) use ($value) {
                $query->where('nickname', 'like', "%$value%");
            }
        );
    }

    public function mobile($value)
    {
        return $this->builder->whereHas(
            'user',
            function ($query) use ($value) {
                $query->where('phone', 'like', "%$value%");
            }
        );
    }

    public function out_trade_no($value)
    {
        return $this->builder->where('out_trade_no', 'like', $value);
    }

    public function gift_item_name($value)
    {
        return $this->builder->where('gift_item_name', 'like', "%{$value}%");
    }

    public function status($value)
    {
        return $this->builder->where('status', $value);
    }

    public function delivery_time($value)
    {
        $date = splitDaterange($value);

        return $this->builder->whereDate('delivery_time', '>=', date('Y-m-d', strtotime($date['from'])))
            ->whereDate('delivery_time', '<=', date('Y-m-d', strtotime($date['to'])));
    }

    public function exchange_time($value)
    {
        $date = splitDaterange($value);

        return $this->builder->whereDate('exchange_time', '>=', date('Y-m-d', strtotime($date['from'])))
            ->whereDate('exchange_time', '<=', date('Y-m-d', strtotime($date['to'])));
    }
}
