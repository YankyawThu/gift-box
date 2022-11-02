<?php

namespace App\Repositories\UI;

use App\Models\GiftItemBox;
use App\Repositories\BaseRepository;

class GiftItemBoxRepository extends BaseRepository
{
    public function __construct(GiftItemBox $model)
    {
        $this->model = $model;
    }

    public function getItemsByBoxId($boxId)
    {
        return $this->model->where('gift_box_id', $boxId)->pluck('gift_item_id')->toArray();
    }

    public function updateProbability($id)
    {
        $items = $this->model->where('gift_box_id', $id)->get();
        $data = [];
        foreach ($items as $item) {
            $itemsQty[] = $item->giftItems->qty;

            $data[] = $item->giftItems;
        }

        $sum = array_sum($itemsQty);

        foreach ($data as $dt) {
            $probability = $dt->qty == 0 ? 0 : $dt->qty / $sum;
            $this->model->where('gift_box_id', $id)->where('gift_item_id', $dt->id)->update(['probability' => $probability]);
        }

        return;
    }

    public function getByIdAndProbability($id, $probability)
    {
        return $this->model->where('gift_box_id', $id)->where('probability', $probability)->pluck('gift_item_id');
    }
}
