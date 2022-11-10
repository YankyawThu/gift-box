<?php

namespace App\Repositories\Admin;

use App\Models\RuleConfiguration;
use App\Repositories\BaseRepository;

class RuleConfigRepository extends BaseRepository
{
    public function __construct(RuleConfiguration $model)
    {
        $this->model = $model;
    }
}
