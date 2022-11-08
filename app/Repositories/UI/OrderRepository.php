<?php

namespace App\Repositories\UI;

use App\Models\DeliveryOrder;
use App\Repositories\BaseRepository;

class OrderRepository extends BaseRepository
{
    public function __construct(DeliveryOrder $model)
    {
        $this->model = $model;
    }

    public function getOrders($request, $page)
    {
        $status = $request->status;
        $statusList = [1 => 'undelivered', 2 => 'unreceived', 3 => 'finished'];
        $status = $statusList[$status];

        return $this->model->where('user_id', auth()->user()->id)->orderBy('id', 'DESC')->where('status', $status)->paginate($page ?? config('enums.itemPerPage'));
    }
}
