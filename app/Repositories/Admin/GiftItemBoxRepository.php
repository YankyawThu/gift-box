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
        if ($request->itemId) {
            $this->model->where('gift_box_id', $request->boxId)->delete();
            foreach ($request->itemId as $key => $v) {
                $this->model->create([
                    'gift_box_id' => $request->boxId,
                    'gift_item_id' => $v,
                ]);
            }

            $items = $this->model->where('gift_box_id', $request->boxId)->get();

            $data = [];
            foreach ($items as $item) {
                // dd($item->giftItems);
                $itemsQty[] = $item->giftItems->qty;
                $data[] = $item->giftItems;
                $sum = array_sum($itemsQty);

                foreach ($data as $dt) {
                    $item->probability = $dt->qty / $sum;
                    $item->save();
                }
            }
        } else {
            $this->model->where('gift_box_id', $request->boxId)->delete();
        }

        return true;
    }
}
