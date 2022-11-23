<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GiftPrizeRecord;

class PrizeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prize = GiftPrizeRecord::all();

        return view('admin.prizes.index', compact('prize'));
    }
}
