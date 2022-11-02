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

    public function gift_item($value)
    {
        if ($value) {
            return $this->builder->whereHas('giftItemBox', function ($q) use ($value) {
                $q->whereHas('giftItems', function ($qu) use ($value) {
                    $qu->where('gift_items.name', 'LIKE', "%$value%");
                });
            });
        }
    }

    public function gift_box($value)
    {
        if ($value) {
            return $this->builder->whereHas('giftItemBox', function ($q) use ($value) {
                $q->whereHas('giftBoxes', function ($qu) use ($value) {
                    $qu->where('gift_boxes.name', 'LIKE', "%$value%");
                });
            });
        }
    }
}
