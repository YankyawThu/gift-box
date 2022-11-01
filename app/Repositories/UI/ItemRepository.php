<?php

namespace App\Repositories\UI;

use App\Exceptions\BadRequestException;
use App\Models\GiftItem;
use App\Repositories\BaseRepository;

class ItemRepository extends BaseRepository
{
    public function __construct(GiftItem $model)
    {
        $this->model = $model;
    }

    public function updateQty($id)
    {
        return $this->model->where('id', $id)->decrement('qty');
    }

    public function getById($id)
    {
        return $this->model->where('id', $id)->first();
    }

    public function getOne($goodsIds, array $except = [])
    {
        $removeGoodsIds = $this->model->whereIn('id', $goodsIds)
        ->where(function ($query) use ($except) {
            $query->where('status', 'offline')->orwhere('qty', '<', 1)->orwhere('deleted_at', null)->orwhere('id', 'in', implode(',', $except));
        })->pluck('id')->toArray();
        $usefulGoodsIds = array_diff($goodsIds, $removeGoodsIds);
        if (empty($usefulGoodsIds)) {
            throw new BadRequestException('Not enough prizes!');
        }
    }
}
