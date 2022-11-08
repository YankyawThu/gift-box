<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BoxCabinetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        if ($this->status == 'exchange' && $this->exchange_time) {
            $time = dateFormat($this->exchange_time);
        } else {
            $time = dateFormat($this->created_at);
        }

        return [
            'item' => [
                'name' => $this->gift_item_name,
                'image' => $this->gift_item_image ? getFileUrlFromAkoneyaMedia($this->gift_item_image) : '',
            ],
            'coinPrice' => optional($this->giftLog)->coin_price,
            'paymentMethod' => optional($this->giftLog)->payment_method,
            'time' => $time,
        ];
    }
}
