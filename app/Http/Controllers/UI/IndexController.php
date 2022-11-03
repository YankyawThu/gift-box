<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function __construct()
    {
    }

    public function helps()
    {
        return Inertia::render('Helps');
    }
}
