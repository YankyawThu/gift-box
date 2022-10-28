<?php

namespace App\Repositories\UI;

use App\Exceptions\BadRequestException;
use App\Models\GiftItem;
use App\Models\GiftItemBox;
use App\Repositories\BaseRepository;

class ItemRepository extends BaseRepository
{
    public function __construct(GiftItem $model, GiftItemBox $giftItemBoxModel)
    {
        $this->model = $model;
        $this->giftItemBoxModel = $giftItemBoxModel;
    }

    public function updateQty($id)
    {
        return $this->model->where('id', $id)->decrement('qty');
    }

    public function getById($id)
    {
        return $this->model->where('id', $id)->first();
    }

    public function getOne($boxId, $goodsIds, array $except = [])
    {
        $removeGoodsIds = $this->model->withTrashed()->whereIn('id', $goodsIds)->where(function ($query) use ($except) {
            $query->orwhere('status', 'offline')->orwhere('qty', '<', 1)->orwhere('deleted_at', '<>', null)->orwhere('id', 'in', implode(',', $except));
        })->pluck('id')->toArray();

        $usefulGoodsIds = array_diff($goodsIds, $removeGoodsIds);

        if (empty($usefulGoodsIds)) {
            throw new BadRequestException('Not enough prizes!');
        }
        $prize = $this->giftItemBoxModel->where('gift_box_id', $boxId)->whereIn('gift_item_id', $usefulGoodsIds)->get()->toArray();

        $prizeRate = array_column($prize, 'probability');

        $goodsList = array_column($prize, 'gift_item_id');

        return $this->random_func($prizeRate, $goodsList);
    }

    public function getMore($boxId, $goodsIds, $times)
    {
        $goodsNum = [];
        $itemIds = [];
        $except = [];

        while (--$times >= 0) {
            $goods_id = $this->getOne($boxId, $goodsIds);

            if (!isset($goodsNum[$goods_id])) {
                $goodsNum[$goods_id] = 0;
            }

            ++$goodsNum[$goods_id];

            $need = $goodsNum[$goods_id];

            $getNew = false;

            while (!self::checkStock($goods_id, $need)) {
                $except[] = $goods_id;
                $goods_id = self::getOne($boxId, $goodsIds, $except);
                $getNew = true;
                $need = isset($goodsNum[$goods_id]) ? $goodsNum[$goods_id] + 1 : 1;
            }
            if ($getNew) {
                if (!isset($goodsNum[$goods_id])) {
                    $goodsNum[$goods_id] = 0;
                }
                ++$goodsNum[$goods_id];
            }
            $itemIds[] = $goods_id;
        }

        return $itemIds;
    }

    private static function checkStock($goods_id, $need)
    {
        if ($need == 1) {
            return true;
        }

        $stock = GiftItem::where('id', $goods_id)->value('qty');

        if (empty($stock) || $stock < $need) {
            return false;
        }

        return true;
    }
}
