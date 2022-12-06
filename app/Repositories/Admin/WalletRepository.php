<?php

namespace App\Repositories\Admin;

use App\Models\MoneyRecord;
use App\Repositories\BaseRepository;
use App\User;

class WalletRepository extends BaseRepository
{
    public function __construct(MoneyRecord $model)
    {
        $this->model = $model;
    }

    public function getWallet($page, $filter)
    {
        return $this->model->filter($filter)->where('type', 'withdraw')->orderBy('id', 'DESC')->paginate($page);
    }

    public function confirm($request)
    {
        $data = $this->model->where('id', $request->id)->where('type', 'withdraw')->first();

        $user = User::where('id', $data->user_id)->decrement('money', abs($data->money));

        $data->update(['status' => 'approved']);

        return true;
    }
}
