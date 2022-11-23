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
        $this->voucherPath = config('media.voucher');
    }

    public function get()
    {
        return $this->model->orderBy('amount', 'asc')->get();
    }

    public function rechargeOrder($request)
    {
        $mediaPath = fileUploadToAkoneyaMedia($request->voucher, $this->voucherPath);

        return $this->rechargeOrderModel->create([
            'user_id' => auth()->user()->id,
            'amount' => $request->amount,
            'pay_method' => $request->payId,
            'out_trade_number' => date('YmdHis').mt_rand(10000, 99999),
            'pay_time' => now(),
            'voucher' => $mediaPath,
        ]);
    }
}
