<?php

namespace App\Services\UI;

use App\Repositories\UI\CollectionRepository;

class CollectionService
{
    public function __construct(CollectionRepository $collectionRepo)
    {
        $this->collectionRepo = $collectionRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function collect($request)
    {
        return $this->collectionRepo->collect($request);
    }

    public function getCollection()
    {
        return $this->collectionRepo->getCollection($this->itemPerPage);
    }

    public function cancelCollection($id)
    {
        return $this->collectionRepo->delete($id);
    }
}
