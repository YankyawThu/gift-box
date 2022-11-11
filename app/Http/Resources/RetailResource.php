<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RetailResource extends JsonResource
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
            'createdAt' => dateFormat($this->created_at),
            'avatar' => $this->avatar,
            'nickname' => $this->nickname,
            'level' => $this->level,
            'coin' => $this->coin,
        ];
    }
}
