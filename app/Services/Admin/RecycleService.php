<?php

namespace App\Services\Admin;

use App\Repositories\Admin\RecycleRepository;

class RecycleService
{
    public function __construct(RecycleRepository $recycleRepo)
    {
        $this->recycleRepo = $recycleRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll()
    {
        return $this->recycleRepo->getPaginated($this->itemPerPage);
    }

    public function update($request, $id)
    {
        return $this->recycleRepo->changeStatus($request, $id);
    }
}
