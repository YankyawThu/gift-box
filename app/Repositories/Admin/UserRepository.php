<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use App\User;

class UserRepository extends BaseRepository
{
    public function __construct(User $model)
    {
        $this->model = $model;
    }
}
