<?php

namespace App\Repositories\Admin;

use App\Models\Recycle;
use App\Repositories\BaseRepository;
use App\Repositories\UI\UserRepository;

class RecycleRepository extends BaseRepository
{
    public function __construct(Recycle $model, UserRepository $userRepo)
    {
        $this->model = $model;
        $this->userRepo = $userRepo;
    }

    public function changeStatus($request)
    {
        $data = $this->model->where('id', $request->id)->first();
        $result = $data->update(['status' => 1]);
        $this->userRepo->increaseMoney($data->price);
        $this->userRepo->
        MoneyRecord::where('user_id', auth()->user()->id)->where('type', 'recycle')->where('order_id', $request->id)->update(
            [
                'after' => $user->money,
                'money' => $request->pay_amount,
                'status' => 'approved',
            ]
        );

        return $result;
    }
}
