<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Http\Controllers\Controller;

class BoxController extends Controller
{
    public function index()
    {
        return view('admin.box.index');
    }
}
