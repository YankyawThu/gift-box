<?php

namespace App\Filters\UI;

use App\Filters\Filter;

class RecycleOrderFilter extends Filter
{
    protected $filters = ['name', 'gift_item_name', 'status', 'out_trade_no'];

    public function name($value)
    {
        if ($value) {
            return $this->builder->whereHas('user', function ($q) use ($value) {
                $q->where('users.name', 'LIKE', "%$value%");
            });
        }
    }

    public function gift_item_name($value)
    {
        return $this->builder->where('gift_item_name', 'LIKE', "%{$value}%");
    }

    public function status($value)
    {
        $status = null;
        $statusList = ['Pending' => 0, 'Approved' => 1];

        return $this->builder->where('status', $statusList[$value]);
    }

    public function out_trade_no($value)
    {
        return $this->builder->where('out_trade_no', 'LIKE', $value);
    }
}
