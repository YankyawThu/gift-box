<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShippingAddressDetailResource extends JsonResource
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
            'township' => [
                'id' => optional($this->township)->id,
                'name' => optional($this->township)->name,
             ],
            'address' => $this->address,
            'isDefault' => $this->is_default,
        ];
    }
}
