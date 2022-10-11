<?php

namespace App\Services\Admin;

use App\Repositories\Admin\GiftItemBoxRepository;

class GiftItemBoxService
{
    public function __construct(GiftItemBoxRepository $itemBoxRepo)
    {
        $this->itemBoxRepo = $itemBoxRepo;
    }

    public function store($request)
    {
        return $this->itemBoxRepo->store($request);
    }

    public function update($request)
    {
        return $this->itemBoxRepo->updateItemBox($request);
    }
}
