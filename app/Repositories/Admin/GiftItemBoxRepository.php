<?php

namespace App\Repositories\Admin;

use App\Models\GiftItemBox;
use App\Repositories\BaseRepository;

class GiftItemBoxRepository extends BaseRepository
{
    public function __construct(GiftItemBox $model)
    {
        $this->model = $model;
    }

    public function store($request)
    {
        foreach ($request->itemId as $key => $v) {
            $this->model->create([
                'gift_box_id' => $request->boxId,
                'gift_item_id' => $v->itemId,
            ]);
        }

        return true;
    }

    public function updateItemBox($request)
    {
        foreach ($request->itemId as $key => $v) {
            $this->model->where('gift_box_id', $request->boxId)->where('gift_item_id', $v->itemId)->delete();
            $this->model->create([
                'gift_box_id' => $request->boxId,
                'gift_item_id' => $v->itemId,
            ]);
        }

        return true;
    }
}
