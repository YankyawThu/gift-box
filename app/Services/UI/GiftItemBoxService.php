<?php

namespace App\Services\UI;

use App\Repositories\UI\GiftItemBoxRepository;

class GiftItemBoxService
{
    public function __construct(GiftItemBoxRepository $itemBoxRepo)
    {
        $this->itemBoxRepo = $itemBoxRepo;
    }

    public function updateProbability($id)
    {
        return $this->itemBoxRepo->updateProbability($id);
    }

    public function getByIdAndProbability($id, $probility)
    {
        return $this->itemBoxRepo->getByIdAndProbability($id, $probility);
    }

    public function getItemsByBoxId($boxId)
    {
        return $this->itemBoxRepo->getItemsByBoxId($boxId);
    }
}
