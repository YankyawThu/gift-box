<?php

namespace App\Services\Admin;

use App\Repositories\Admin\GiftItemBoxRepository;

class GiftItemBoxService
{
    private $itemBoxRepo;
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

    public function detailUpdate($request)
    {
        return $this->itemBoxRepo->detailUpdate($request);
    }

    public function getDetail($id)
    {
        $data = [];
        $itemBox = $this->itemBoxRepo->getById($id);
        $data['item_name'] = optional($itemBox->giftItems)->name;
        $data['box_name'] = optional($itemBox->giftBoxes)->name;
        $data['id'] = $itemBox->id;
        $data['name'] = $itemBox->name;
        $data['probability'] = $itemBox->probability;
        $data['created'] = $itemBox->created_at;

        return $data;
    }
}
