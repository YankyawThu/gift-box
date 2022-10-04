<?php

namespace App\Services\Admin;

use App\Repositories\Admin\ItemRepository;

class ItemService
{
    public function __construct(ItemRepository $itemRepo)
    {
        $this->itemRepo = $itemRepo;
    }

    public function getAll()
    {
        return $this->itemRepo->getPaginated();
    }
}