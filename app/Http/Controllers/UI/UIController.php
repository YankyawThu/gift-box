<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Resources\HomePageResource;
use App\Http\Resources\HomePageResourceCollection;
use App\Models\GiftItem;
use App\Services\UI\BoxService;
use App\Services\UI\GiftItemBoxService;
use App\Services\UI\ItemService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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
        $this->nextId = null;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $data = $this->boxService->getAll();
        // $values = [];
        // foreach ($data as $key => $v) {
        //     // print_r($v->giftItemBox->giftItems);
        //     $values = $v->id;
        //     $values[$key]['name'] = $v->name;
        //     $values[$key]['price'] = $v->price;
        //     foreach ($v->giftItemBox as $k => $item) {
        //         // print_r($item->giftItems);
        //         // $values[$key]['items']['id'] = optional($item->giftItems)->id;
        //         // $values[$key]['items']['name'] = optional($item->giftItems)->name;
        //         // $values[$key]['items']['image'] = optional($item->giftItems)->image ? getFileUrlFromAkoneyaMedia(optional($item->giftItems)->image) : null;
        //         $values[$key][$k]['items'] = $item->giftItemList;
        //     }
        // }
        // dd(HomePageResource::collection($data));
        $dd = new HomePageResourceCollection($data);

        return $dd;

        // return Inertia::render('Home', compact('data'));
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
        $giftItems = [];
        for ($i = 0; $i < count($giftBox->giftItemBox); ++$i) {
            $qty[$giftBox->giftItemBox[$i]->giftItems->id] = $giftBox->giftItemBox[$i]->giftItems->qty;
            $giftItems[] = $giftBox->giftItemBox[$i]->giftItems;
        }

        foreach ($qty as $key => $q) {
            for ($i = 1; $i <= $q; ++$i) {
                $arr[] = GiftItem::where('id', $key)->first();
            }
        }
        $k = array_rand($arr, $times);
        if (is_array($k)) {
            for ($i = 0; $i < count($k); ++$i) {
                print_r($arr[$k[$i]]);
            }
        } else {
            $win_value = $arr[$k];
            echo $win_value;
        }

        $data = $this->boxService->getAll();

        return view('ui.home', compact('data'));
    }
}
