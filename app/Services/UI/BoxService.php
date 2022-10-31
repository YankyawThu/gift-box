<?php

namespace App\Services\UI;

use App\Repositories\UI\BoxRepository;

class BoxService
{
    public function __construct(BoxRepository $boxRepo)
    {
        $this->boxRepo = $boxRepo;
        $this->uploadPhotoFolder = config('media.giftBoxPath');
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll()
    {
        return $this->boxRepo->getAll();
    }

    public function getItemsByBoxId($id)
    {
        return $this->boxRepo->getAll();
    }

    public function getById($id)
    {
        return $this->boxRepo->getById($id);
    }
}
