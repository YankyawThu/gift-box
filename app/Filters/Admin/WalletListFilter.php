<?php

namespace App\Filters\Admin;

use App\Filters\Filter;

class WalletListFilter extends Filter
{
    protected $filters = ['amount', 'name', 'nickname', 'mobile', 'status'];

    public function amount($value)
    {
        return $this->builder->where('money', -$value);
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

    public function status($value)
    {
        return $this->builder->where('status', $value);
    }
}
