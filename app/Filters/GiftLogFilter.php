<?php

namespace App\Filters;

class GiftLogFilter extends Filter
{
    protected $filters = ['user_name', 'gift_item', 'gift_box'];

    public function user_name($value)
    {
        if ($value) {
            return $this->builder->whereHas('user', function ($q) use ($value) {
                $q->where('users.name', 'LIKE', "%$value%");
            });
        }
    }

    public function gift_box($value)
    {
        if ($value) {
            return $this->builder->whereHas('giftBox', function ($q) use ($value) {
                $q->where('gift_boxes.name', 'LIKE', "%$value%");
            });
        }
    }
}
