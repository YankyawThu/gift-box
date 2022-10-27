<?php

namespace App\Repositories\UI;

use App\Models\GiftPrizeRecord;
use App\Repositories\BaseRepository;

class PrizeRepository extends BaseRepository
{
    public function __construct(GiftPrizeRecord $model, ItemRepository $itemRepo)
    {
        $this->model = $model;
        $this->itemRepo = $itemRepo;
    }

    public function store($goodsInfo, $log)
    {
        $prizeInfo = [];
        foreach ($goodsInfo as $goods) {
            $prize = $this->model->create([
                'user_id' => auth()->user()->id,
                'gift_log_id' => $log->id,
                'gift_item_id' => $goods->id,
                'status' => 3,
                'delivery_time' => now(),
            ]);
            $this->itemRepo->updateQty($goods->id);
            $prizeInfo[] = [
                'prizeId' => intval($prize->id),
                'image' => getFileUrlFromAkoneyaMedia($goods->image),
                'itemName' => $goods->name,
                'price' => $goods->price,
            ];
        }

        return $prizeInfo;
    }
}
