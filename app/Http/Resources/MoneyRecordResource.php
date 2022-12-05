<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MoneyRecordResource extends JsonResource
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
        $typeList = [
            'recycle' => 'Recycling',
            'deliver' => 'Shipment Applying',
            'withdraw' => 'Go to wallet',
            'deposit' => 'Recharge',
        ];
        $mr_status = [
            'pending' => 'Pending',
            'approved' => 'Approved',
            'reject' => 'Reject',
        ];

        return [
            'type' => $typeList[$this->type],
            'money' => $this->money,
            'time' => dateFormat($this->created_at),
            'status' => $mr_status[$this->status],
        ];
    }
}
