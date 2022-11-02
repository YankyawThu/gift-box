<?php

namespace App\Services\UI;

use App\Repositories\UI\ItemRepository;

class ItemService
{
    public function __construct(ItemRepository $itemRepo)
    {
        $this->itemRepo = $itemRepo;
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
}
