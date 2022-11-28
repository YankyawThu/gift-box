<?php

namespace App\Repositories\Admin;

use App\Models\MoneyRecord;
use App\Models\Recycle;
use App\Repositories\BaseRepository;
use App\User;

class RecycleRepository extends BaseRepository
{
    public function __construct(Recycle $model)
    {
        $this->model = $model;
    }

    public function changeStatus($request)
    {
        $data = $this->model->where('id', $request->id)->first();

        $result = $data->update(['status' => 1]);

        User::where('id', $data->user_id)->increment('money', $data->price);
        $user = $this->userRepo->getById($data->user_id);
        MoneyRecord::where('user_id', $data->user_id)->where('type', 'recycle')->where('order_id', $request->id)->update(
            [
                'after' => $user->money,
                'status' => 'approved',
            ]
        );

        return $result;
    }
}
