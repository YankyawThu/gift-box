<?php

namespace App\Repositories\Admin;

use App\Models\BoxCategory;
use App\Repositories\BaseRepository;

class BoxCategoryRepository extends BaseRepository
{
    public function __construct(BoxCategory $model)
    {
        $this->model = $model;
    }
}
