<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderListResource extends JsonResource
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
        $statusListText = ['undelivered' => 'To be delivered', 'unreceived' => 'Ongoing', 'finished' => 'Completed'];

        return [
            'id' => $this->id,
            'status' => $statusListText[$this->status],
            'time' => dateFormat($this->created_at),
            'item' => [
                'id' => optional(optional($this->giftPrize)->giftItem)->id,
                'name' => optional(optional($this->giftPrize)->giftItem)->name,
                'image' => optional(optional($this->giftPrize)->giftItem)->image ? getFileUrlFromAkoneyaMedia(optional(optional($this->giftPrize)->giftItem)->image) : '',
                'price' => optional(optional($this->giftPrize)->giftItem)->buy_price,
            ],
        ];
    }
}
