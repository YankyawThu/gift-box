<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GiftItemResource extends JsonResource
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
            'name' => $this->name,
            'image' => $this->image ? getFileUrlFromAkoneyaMedia($this->image) : null,
            'tag' => $this->tag,
            'price'  => $this->buy_price
        ];
    }
}
