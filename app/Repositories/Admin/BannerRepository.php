<?php

namespace App\Repositories\Admin;

use App\Models\Banner;
use App\Repositories\BaseRepository;

class BannerRepository extends BaseRepository
{
    public function __construct(Banner $model)
    {
        $this->model = $model;
    }

    public function getPaginatedWithFilter($page = null, $filter)
    {
        return $this->model->filter($filter)->orderBy('sort', 'ASC')->paginate($page ?? config('enums.itemPerPage'));
    }

    public function getSequence()
    {
        return $this->model->orderBy('sort', 'desc')->pluck('sort')->first();
    }
}
