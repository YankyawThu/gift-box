<?php

namespace App\Repositories\UI;

use App\Models\RetailDetail;
use App\Models\RetailInvitation;
use App\Models\Withdrawal;
use App\Repositories\BaseRepository;

class RetailRepository extends BaseRepository
{
    public function __construct(RetailDetail $model, RetailInvitation $rtInvtModel, Withdrawal $withdrawalModel)
    {
        $this->model = $model;
        $this->rtInvtModel = $rtInvtModel;
        $this->withdrawalModel = $withdrawalModel;
    }

    public function getTotalCoin()
    {
        $sum = $this->model->where('user_id', auth()->user()->id)->sum('coin');
        $wd = $this->withdrawalModel->where('user_id', auth()->user()->id)->sum('amount');

        return response()->json([
            'total' => $sum,
            'withdraw' => $wd,
        ]);
    }
}
