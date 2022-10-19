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
}
