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

    public function getAll()
    {
        return $this->boxCatRepo->getPaginated($this->itemPerPage);
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
