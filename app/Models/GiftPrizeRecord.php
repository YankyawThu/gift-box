<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GiftPrizeRecord extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function giftItem()
    {
        return $this->belongsTo(GiftItem::class, 'gift_item_id');
    }

    public function giftLog()
    {
        return $this->belongsTo(GiftLog::class, 'gift_log_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function statusBadge()
    {
        switch ($this->status) {
            case config('config.prizeStatus.1'):
                return 'danger';
                break;
            case config('config.prizeStatus.2'):
                return 'info';
                break;
            case config('config.prizeStatus.3'):
                return 'default';
                break;
            case config('config.prizeStatus.4'):
                return 'success';
                break;

            default:
                // code...
                break;
        }
    }
}
