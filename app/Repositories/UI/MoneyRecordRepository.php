<?php

namespace App\Repositories\UI;

use App\Models\MoneyRecord;
use App\Repositories\BaseRepository;

class MoneyRecordRepository extends BaseRepository
{
    public function __construct(MoneyRecord $model)
    {
        $this->model = $model;
    }

    public function getMyBalance($request, $page)
    {
        $type = trim($request->type);

        return $this->model->where('user_id', auth()->user()->id)->where(function ($q) use ($type) {
            if ($type == 'in') {
                $q->where('money', '>', 0);
            } else {
                $q->where('money', '<', 0);
            }
        })->orderBy('id', 'desc')->paginate($page);
    }
}
