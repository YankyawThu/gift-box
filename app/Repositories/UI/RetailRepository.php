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

    public function getRetailList($page)
    {
        return $this->model->join('users', 'users.id', '=', 'retail_details.source_user_id')->where('user_id', auth()->user()->id)->select('retail_details.created_at,users.avatar,users.nickname,retail_details.level,retail_details.coin')->orderBy('retail_details.id', 'desc')->paginate($page);
    }

    public function getTeamList($page)
    {
        return $this->rtInvtModel->join('users', 'users.id', '=', 'retail_details.user_id')->where('pid', auth()->user()->id)->select('retail_invitations.created_at', 'users.name', 'retail_invitations.level')->paginate($page);
    }
}
