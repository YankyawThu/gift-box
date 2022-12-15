<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UnboxResource extends JsonResource
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
        return [
            'id' => $this->id,
            'box' => [
                'id' => optional(optional($this->giftLog)->giftBox)->id,
                'name' => optional(optional($this->giftLog)->giftBox)->name,
                'image' => optional(optional($this->giftLog)->giftBox)->image ? getFileUrlFromAkoneyaMedia(optional(optional($this->giftLog)->giftBox)->image) : null,
                'price' => optional(optional($this->giftLog)->giftBox)->price
            ],
            'status' => $this->status,
            'time' => dateFormat($this->created_at)
        ];
    }
}
