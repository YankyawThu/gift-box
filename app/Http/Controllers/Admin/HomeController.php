<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GiftBox;
use App\Models\GiftItem;
use App\Models\GiftLog;
use App\Models\GiftPrizeRecord;
use App\Models\RechargeOrder;
use App\User;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('admin.dashboard', [
            'totalUsers' => User::count(),
            'totalOpenBoxOrder' => GiftLog::count(),
            'totalgoods' => GiftItem::count(),
            'totalbox' => GiftBox::count(),
            'todayusersignup' => User::whereDate('join_time', Carbon::today())->count(),
            'todayuserlogin' => User::whereDate('login_time', Carbon::today())->count(),
            'unpaidMoneyRecharge' => RechargeOrder::where('status', config('config.rechargePayStatus.1'))->sum('amount'),
            'paidMoneyRecharge' => RechargeOrder::where('status', config('config.rechargePayStatus.2'))->sum('amount'),
            'shippingOrder' => GiftPrizeRecord::where('status', 'delivery')->count(),
            'recycleOrder' => GiftPrizeRecord::where('status', 'exchange')->count(),
        ]);
    }
}
