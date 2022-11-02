<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShippingAddressResource extends JsonResource
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
            'phone' => $this->phone,
            'township' => optional($this->township)->name,
            'district' => config('zones.zoneSelections.'.optional($this->township)->zone_id)['name'],
            'address' => $this->address,
        ];
    }
}
