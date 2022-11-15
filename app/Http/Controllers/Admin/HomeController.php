<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GiftBox;
use App\Models\GiftItem;
use App\Models\RechargeOrder;
use App\User;

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
            // 'usedBoxOrderCount'      => Order::where('status', 'used')->count(),
            'totalgoods' => GiftItem::count(),
            'totalbox' => GiftBox::count(),
            'todayusersignup' => User::whereDate('join_time', now())->count(),
            'todayuserlogin' => User::whereDate('login_time', now())->count(),
            // 'money_box_unpay' => Order::where('status', 'unpay')->sum('rmb_amount'),
            // 'money_box_paid'  => Order::where('status', 'unused')->whereOr('status', 'used')->sum('rmb_amount'),
            'money_recharge_unpay' => RechargeOrder::where('status', 'unpay')->sum('amount'),
            'money_recharge_paid' => RechargeOrder::where('status', 'paid')->sum('amount'),
        ]);
    }
}
