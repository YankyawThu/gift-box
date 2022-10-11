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
        if($request->itemId) {
            $this->model->where('gift_box_id', $request->boxId)->delete();
            foreach ($request->itemId as $key => $v) {
                $this->model->create([
                    'gift_box_id' => $request->boxId,
                    'gift_item_id' => $v,
                ]);
            }
        }
        else 
            $this->model->where('gift_box_id', $request->boxId)->delete();

        return true;
    }
}
