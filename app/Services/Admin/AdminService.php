<?php

namespace App\Services\Admin;

use App\Repositories\Admin\AdminRepository;

class AdminService
{
    private $adminRepo;

    public function __construct(AdminRepository $adminRepo)
    {
        $this->adminRepo = $adminRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll($filter)
    {
        return $this->adminRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }
}
