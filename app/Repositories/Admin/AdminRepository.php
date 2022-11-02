<?php

namespace App\Repositories\Admin;

use App\Models\Admin;
use App\Repositories\BaseRepository;

class AdminRepository extends BaseRepository
{
    public function __construct(Admin $model)
    {
        $this->model = $model;
    }
}
