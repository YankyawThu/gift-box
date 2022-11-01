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
        $statusListText = ['undelivered' => 'to be delivered', 'unreceived' => 'Shipped', 'finished' => 'completed'];
        $status = $statusList[$status];

        $datas = $this->model->orderBy('id', 'DESC')->where('status', $status)->paginate($page ?? config('enums.itemPerPage'));
        dd($datas);
    }
}
