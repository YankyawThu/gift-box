<?php

namespace App\Services\UI;

use App\Exceptions\BadRequestException;
use App\Repositories\UI\GiftItemBoxRepository;
use App\Repositories\UI\ItemRepository;

class ItemService
{
    public function __construct(ItemRepository $itemRepo, GiftItemBoxRepository $giftItemBoxRepo)
    {
        $this->itemRepo = $itemRepo;
        $this->giftItemBoxRepo = $giftItemBoxRepo;
    }

    public function updateQty($id)
    {
        return $this->itemRepo->updateQty($id);
    }

    public function getById($id)
    {
        return $this->itemRepo->getById($id);
    }

    public function getOne($boxId, $goodsIds, array $except = [])
    {
        return $this->itemRepo->getOne($boxId, $goodsIds, $except);
    }

    public function getMore($boxId, $goodsIds, $times)
    {
        $items = $this->giftItemBoxRepo->getItemInfoByBoxId($boxId);
        $sumQty = 0;
        foreach ($items as $item) {
            $sumQty += $item->giftItems->qty;
        }
        if ($sumQty < $times) {
            throw new BadRequestException('Not enough prizes!');
        }

        return $this->itemRepo->getMore($boxId, $goodsIds, $times);
    }
}
