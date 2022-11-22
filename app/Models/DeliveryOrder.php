<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class DeliveryOrder extends Model
{
    protected $guarded = [];

    public function scopeFilter($query, $filters)
    {
        $filters->apply($query);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function address()
    {
        return $this->belongsTo(Address::class, 'address_id');
    }

    public function giftItem()
    {
        return $this->belongsTo(GiftItem::class, 'gift_item_id');
    }

    public function statusBadge()
    {
        switch ($this->status) {
            case config('config.deliveryStatus.1'):
                return 'danger';
                break;
            case config('config.deliveryStatus.2'):
                return 'info';
                break;
            case config('config.deliveryStatus.3'):
                return 'success';
                break;
            case config('config.deliveryStatus.4'):
                return 'secondary';
                break;

            default:
                // code...
                break;
        }
    }

    public function giftPrize()
    {
        return $this->belongsTo(GiftPrizeRecord::class, 'gift_prize_id');
    }
}
