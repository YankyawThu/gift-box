<?php

namespace App\Repositories\UI;

use App\Models\RechargeList;
use App\Models\RechargeOrder;
use App\Repositories\BaseRepository;

class RechargeRepository extends BaseRepository
{
    public function __construct(RechargeList $model, RechargeOrder $rechargeOrderModel)
    {
        $this->model = $model;
        $this->rechargeOrderModel = $rechargeOrderModel;
    }

    public function get()
    {
        return $this->model->orderBy('amount', 'asc')->get();
    }

    public function rechargeOrder($request)
    {
        return $this->rechargeOrderModel->create([
            'user_id' => auth()->user()->id,
            'coin_amount' => $request->amount,
        ]);
    }
}
