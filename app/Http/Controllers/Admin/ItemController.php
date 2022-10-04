<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Http\Controllers\Controller;

class ItemController extends Controller
{
    public function index()
    {
        return view('admin.item.index');
    }
}
