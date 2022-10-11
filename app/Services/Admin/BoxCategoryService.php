<?php

namespace App\Services\Admin;

use App\Repositories\Admin\BoxCategoryRepository;

class BoxCategoryService
{
    public function __construct(BoxCategoryRepository $boxCatRepo)
    {
        $this->boxCatRepo = $boxCatRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAllNoPaginated()
    {
        return $this->boxCatRepo->getAll();
    }

    public function getAll($filter)
    {
        return $this->boxCatRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }

    public function store($request)
    {
        return $this->boxCatRepo->create($request);
    }

    public function update($request, $id)
    {
        return $this->boxCatRepo->update($request, $id);
    }

    public function destroy($id)
    {
        return $this->boxCatRepo->delete($id);
    }
}
