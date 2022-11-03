<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CollectionResource extends JsonResource
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
                'id' => $this->gift_box_id,
                'name' => optional($this->giftBox)->name,
                'image' => optional($this->giftBox)->image ? getFileUrlFromAkoneyaMedia(optional($this->giftBox)->image) : null,
                'coin' => optional($this->giftBox)->coin,
            ],
            'time' => dateFormat($this->created_at),
        ];
    }
}
