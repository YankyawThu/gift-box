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
}
