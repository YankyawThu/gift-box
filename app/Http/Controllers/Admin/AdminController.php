<?php

namespace App\Http\Controllers\Admin;

use App\Filters\Admin\AdminFilter;
use App\Http\Controllers\Controller;
use App\Services\Admin\AdminService;

class AdminController extends Controller
{
    private $adminService;
    public function __construct(AdminService $adminService)
    {
        $this->adminService = $adminService;
    }

    public function index(AdminFilter $filter)
    {
        $data = $this->adminService->getAll($filter);

        return view('admin.admins.index', compact('data'));
    }
}
