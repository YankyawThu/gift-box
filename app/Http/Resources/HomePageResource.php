<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HomePageResource extends JsonResource
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
        $items = [];
        foreach ($this->giftItemBox as $v) {
            $items[] = $v->giftItems;
        }

        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'items' => GiftItemResource::collection($items),
        ];
    }
}
