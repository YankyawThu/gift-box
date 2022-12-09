<?php

namespace App\Http\Controllers\Admin;

use App\Filters\Admin\WalletListFilter;
use App\Http\Controllers\Controller;
use App\Services\Admin\WalletService;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    public function __construct(WalletService $walletService)
    {
        $this->walletService = $walletService;
    }

    public function index(WalletListFilter $filter)
    {
        $data = $this->walletService->getAll($filter);

        return view('admin.wallet.index', compact('data'));
    }

    public function update(Request $request, $id)
    {
        $this->walletService->confirm($request);

        return redirect()->back()->with('status', 'Approved Status Change Successfully!');
    }
}
