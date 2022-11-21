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
            'box_exchange' => 'Blind Box Recycling',
            'no_stock' => 'Insufficient stock, pay back',
            'withdrawal' => 'Withdrawal',
            'to_coin' => 'Go to wallet',
            'pay_delivery' => 'Shipping fee',
            'recharge' => 'Recharge',
        ];

        return [
            'type' => $typeList[$this->type],
            'money' => $this->money,
            'time' => dateFormat($this->created_at),
        ];
    }
}
