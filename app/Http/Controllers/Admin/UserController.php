<?php

namespace App\Http\Controllers\Admin;

use App\Filters\UserFilter;
use App\Http\Controllers\Controller;
use App\Services\Admin\UserService;

class UserController extends Controller
{
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index(UserFilter $filter)
    {
        $data = $this->userService->getAll($filter);

        return view('admin.user.index', compact('data'));
        // return view('users.index');
    }
}
