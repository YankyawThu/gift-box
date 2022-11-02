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
                $itemsQty[] = $item->giftItems->qty;
                $data[] = $item->giftItems;
            }
            $sum = array_sum($itemsQty);

            foreach ($data as $dt) {
                $probability = $dt->qty == 0 ? 0 : $dt->qty / $sum;

                $this->model->where('gift_box_id', $request->boxId)->where('gift_item_id', $dt->id)->update(['probability' => $probability]);
            }
        } else {
            $this->model->where('gift_box_id', $request->boxId)->delete();
        }

        return true;
    }

    public function detailUpdate($request)
    {
        $model = $this->model->find($request->id);
        $model->update([
            'probability' => $request->probability,
            'gift_item_id' => $request->giftItemId,
        ]);

        return true;
    }
}
