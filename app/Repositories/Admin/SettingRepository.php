<?php

namespace App\Repositories\Admin;

use App\Models\Setting;
use App\Repositories\BaseRepository;

class SettingRepository extends BaseRepository
{
    public function __construct(Setting $model)
    {
        $this->model = $model;
    }

    public function getPaginatedWithFilter($page = null, $filter)
    {
        return $this->model->filter($filter)->orderBy('sort', 'ASC')->paginate($page ?? config('enums.itemPerPage'));
    }
}
