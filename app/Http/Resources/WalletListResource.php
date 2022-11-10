<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WalletListResource extends JsonResource
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
        $typeList = ['pay_box' => 'Pay blind box', 'recharge' => 'Recharge', 'from_balance' => 'Balance transfer', 'refund' => 'Insufficient stock,pay back', 'pay_delivery' => 'Shipping fee'];

        return [
            'type' => $typeList[$this->type],
            'coin' => $this->coin,
            'time' => dateFormat($this->created_at),
        ];
    }
}
