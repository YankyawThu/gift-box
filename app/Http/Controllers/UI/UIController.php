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
                for ($i = 0; $i < count($giftBox->giftItemBox); ++$i) {
                    if ($giftBox->giftItemBox[$i]->probability > $max_probability) {
                        $max_probability = $giftBox->giftItemBox[$i]->probability;
                    }
                }
                $itemId = $this->itemBoxService->getByIdAndProbability($id, $max_probability);
                $itemByMaxProbability = $this->itemService->getById($itemId);

                if ($itemByMaxProbability->qty <= 0) {
                    echo 'No items';
                }
                if ($max_probability <= $rand) {
                    $win_value = $itemByMaxProbability;
                }
            }
            if ($win_value) {
                $this->itemService->updateQty($win_value->id);
                $this->itemBoxService->updateProbability($id);
            }
            echo $win_value;

            return view('ui.home', compact('data', 'win_value'));
        } else {
            return redirect()->route('login');
        }
    }

    public function openBlindBox($id, $times)
    {
        $giftBox = $this->boxService->getItemsByBoxId($id);
        $arr = [];
        for ($i = 0; $i < count($giftBox->giftItemBox); ++$i) {
            $qty[] = $giftBox->giftItemBox[$i]->giftItems->qty;
        }
        // print_r($qty);
        foreach ($qty as $q) {
            for ($j = 1; $j <= $q; ++$j) {
                $arr[] = $j;
            }
        }
        print_r($arr);
        // print_r(array_rand($arr, 1));
    }
}
