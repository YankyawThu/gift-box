<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Services\UI\BoxService;
use Illuminate\Support\Facades\Auth;

class UIController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(BoxService $boxService)
    {
        // $this->middleware('auth');
        $this->boxService = $boxService;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $data = $this->boxService->getAll();

        return view('ui.home', compact('data'));
    }

    public function openBox($id, $times)
    {
        // dd($times);
        $data = $this->boxService->getAll();

        if (Auth::check()) {
            $giftBox = $this->boxService->getItemsByBoxId($id);
            $items = [];
            $itemsQty = [];
            foreach ($giftBox->giftItemBox as $giftItemBox) {
                $itemsQty[] = $giftItemBox->giftItems->qty;
                $items[] = $giftItemBox->giftItems;
            }
            $sum = array_sum($itemsQty);

            foreach ($items as $item) {
                $item->probality = ($sum % $item->qty) / 100;
            }
            dd($items);
            $rand = (rand(0, 1000) / 1000) * $sum;
            $partialSum = 0;
            for ($i = 0; $i < count($itemsQty); ++$i) {
                $partialSum += $itemsQty[$i];
                echo "ran : $rand";
                echo "partial sum : $partialSum \n";
                if ($partialSum >= $rand) {
                    dd($items[$i]);
                    $win_value = $items[$i];
                    break;
                }
            }

            return view('ui.home', compact('data', 'win_value'));
        } else {
            return redirect()->route('login');
        }
    }
}
