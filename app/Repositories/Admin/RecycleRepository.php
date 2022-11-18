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

    public function changeStatus($request, $id)
    {
        $data = $this->model->where('id', $id)->first();
        $result = $data->update(['status' => $request->status]);
        $this->userRepo->increaseMoney($data->price);

        return $result;
    }
}
