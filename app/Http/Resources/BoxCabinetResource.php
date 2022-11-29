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
            $price = $this->gift_item_sell_price;
        } else {
            $time = dateFormat($this->created_at);
            $price = $this->gift_item_buy_price;
        }
        if ($request->status == 1) {
            return [
                'id' => $this->id,
                'item' => [
                    'name' => $this->gift_item_name,
                    'image' => optional($this->giftItem)->image ? getFileUrlFromAkoneyaMedia(optional($this->giftItem)->image) : '',
                ],
                'price' => $price,
                'time' => $time,
            ];
        } else {
            return [
                'id' => $this->id,
                'item' => [
                    'name' => $this->gift_item_name,
                    'image' => optional($this->giftItem)->image ? getFileUrlFromAkoneyaMedia(optional($this->giftItem)->image) : '',
                ],
                'price' => $price,
                'time' => $time,
                'isApprove' => \App\Models\Recycle::where('gift_prize_id', $this->id)->where('gift_item_id', $this->gift_item_id)->pluck('status')[0] == 0 ? false : true,
            ];
        }
    }
}
