<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Services\UI\BoxService;
use App\Services\UI\GiftItemBoxService;
use App\Services\UI\ItemService;
use Illuminate\Support\Facades\Auth;

class UIController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(BoxService $boxService, ItemService $itemService, GiftItemBoxService $itemBoxService)
    {
        // $this->middleware('auth');
        $this->boxService = $boxService;
        $this->itemService = $itemService;
        $this->itemBoxService = $itemBoxService;
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
        $data = $this->boxService->getAll();

        if (Auth::check()) {
            $giftBox = $this->boxService->getItemsByBoxId($id);
            $win_value = null;
            $itemsQty = [];
            $max_probability = 0;
            if ($giftBox->giftItemBox) {
                $rand = (rand(0, 1000) / 1000) * $giftBox->giftItemBox->sum('probability');
                // dd($giftBox->giftItemBox);

                // foreach ($giftBox->giftItemBox as $giftItemBox) {

                for ($i = 0; $i < count($giftBox->giftItemBox); ++$i) {
                    if ($giftBox->giftItemBox[$i]->probability > $max_probability) {
                        $max_probability = $giftBox->giftItemBox[$i]->probability;
                    }

                    // $items[] = $giftItemBox->giftItems;

                    // dd($giftItemBox->giftItems->where('id', $max_pro_val->gift_item_id)->first());
                    // if ($giftItemBox->max('probability') >= $rand) {
                    //     $win_value = $max_pro_val;

                    //     break;
                    // }
                    // }
                }

                $itemId = $this->itemBoxService->getByIdAndProbability($id, $max_probability);
                if ($max_probability >= $rand) {
                    $win_value = $itemId; // to edit
                }
            }

            // if ($max_pro_val->qty <= 0) {
            //     echo 'No items';
            // }

            // if ($win_value) {
            //     $this->itemService->updateQty($win_value->gift_item_id);
            //     $this->itemBoxService->updateProbability($id);
            // }
            // echo $win_value;

            return view('ui.home', compact('data', 'win_value'));
        } else {
            return redirect()->route('login');
        }
    }
}
