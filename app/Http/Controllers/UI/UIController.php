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

            $win_value = null;
            $itemsQty = [];
            if ($giftBox->giftItemBox) {
                foreach ($giftBox->giftItemBox as $giftItemBox) {
                    $itemsQty[] = $giftItemBox->giftItems->qty;
                    $sum = array_sum($itemsQty);
                    $items[] = $giftItemBox->giftItems;

                    $rand = rand(0, round($giftItemBox->probability, 2));

                    for ($i = 0; $i < count($itemsQty); ++$i) {
                        if ($giftItemBox->probability >= $rand) {
                            $win_value = $items[$i];
                            break;
                        }
                    }
                }
            }
            // $sum = array_sum($itemsQty);

            // $rand = (rand(0, 1000) / 1000) * $sum;
            // dd($rand);
            // $partialSum = 0;
            // for ($i = 0; $i < count($itemsQty); ++$i) {
            //     $partialSum += $itemsQty[$i];
            //     echo "ran : $rand";
            //     echo "partial sum : $partialSum \n";
            //     if ($partialSum >= $rand) {
            //         dd($items[$i]);
            //         $win_value = $items[$i];
            //         break;
            //     }
            // }

            return view('ui.home', compact('data', 'win_value'));
        } else {
            return redirect()->route('login');
        }
    }
}
