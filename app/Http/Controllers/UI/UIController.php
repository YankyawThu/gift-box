<?php

namespace App\Http\Controllers\UI;

use App\Exceptions\BadRequestException;
use App\Http\Controllers\Controller;
use App\Http\Requests\OpenBoxRequest;
use App\Http\Resources\HomePageResource;
use App\Http\Resources\HomePageResourceCollection;
use App\Models\GiftItem;
use App\Services\UI\BoxService;
use App\Services\UI\GiftItemBoxService;
use App\Services\UI\GiftLogService;
use App\Services\UI\ItemService;
use App\Services\UI\PrizeService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UIController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(BoxService $boxService, ItemService $itemService, GiftItemBoxService $itemBoxService, PrizeService $prizeService, GiftLogService $giftLogService)
    {
        // $this->middleware('auth');
        $this->boxService = $boxService;
        $this->itemService = $itemService;
        $this->itemBoxService = $itemBoxService;
        $this->prizeService = $prizeService;
        $this->giftLogService = $giftLogService;
        $this->nextId = null;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return Inertia::render('Home');
    }

    public function detail($id)
    {
        $data = new HomePageResource($this->boxService->getById($id));

        return Inertia::render('BoxDetail', compact('data'));
    }

    public function getAll()
    {
        $result = $this->boxService->getAll();
        $data = new HomePageResourceCollection($result);

        return response()->json($data);
    }

    public function createOrder($boxId, $times)
    {
        $box = $this->boxService->getById($boxId);
        if (!$box) {
            throw new BadRequestException('Wrong box number!');
        }
        if (!in_array($request->times, [1, 5])) {
            throw new BadRequestException('Wrong number of unpacked!');
        }

        return $this->giftLogService->store($box, $times);
    }

    public function openLuckyBox(OpenBoxRequest $request)
    {
        $box = $this->boxService->getById($request->boxId);

        if (!$box) {
            throw new BadRequestException('Wrong box number!');
        }
        if (!in_array($request->times, [1, 5])) {
            throw new BadRequestException('Wrong number of unpacked!');
        }

        $log = $this->giftLogService->getById($request->orderId);

        $log->payment_method = 1;
        $log->status = 2;
        $log->save();

        $goodsIds = $this->itemBoxService->getItemsByBoxId($request->boxId);

        if ($request->times == 1) {
            $itemIds = [$this->itemService->getOne($request->boxId, $goodsIds, $except = [])];
        } else {
            $itemIds = $this->itemService->getMore($request->boxId, $goodsIds, $request->times);
        }

        foreach ($itemIds as $itemId) {
            $goodsInfo[] = $this->itemService->getById($itemId);
        }

        $prize = $this->prizeService->store($goodsInfo, $log);
        $this->boxService->increaseSale($request->boxId, $request->times);

        return $prize;
    }

    // /* testing */
    // public function openBox($id, $times)
    // {
    //     $data = $this->boxService->getAll();

    //     if (Auth::check()) {
    //         $giftBox = $this->boxService->getById($id);
    //         $win_value = null;
    //         $itemsQty = [];
    //         $max_probability = 0;
    //         if ($giftBox->giftItemBox) {
    //             $rand = (rand(0, 1000) / 1000) * $giftBox->giftItemBox->sum('probability');
    //             for ($i = 0; $i < count($giftBox->giftItemBox); ++$i) {
    //                 if ($giftBox->giftItemBox[$i]->probability > $max_probability) {
    //                     $max_probability = $giftBox->giftItemBox[$i]->probability;
    //                 }
    //             }
    //             $itemId = $this->itemBoxService->getByIdAndProbability($id, $max_probability);
    //             $itemByMaxProbability = $this->itemService->getById($itemId);

    //             if ($itemByMaxProbability->qty <= 0) {
    //                 echo 'No items';
    //             }
    //             if ($max_probability <= $rand) {
    //                 $win_value = $itemByMaxProbability;
    //             }
    //         }
    //         if ($win_value) {
    //             $this->itemService->updateQty($win_value->id);
    //             $this->itemBoxService->updateProbability($id);
    //         }
    //         echo $win_value;

    //         return view('ui.home', compact('data', 'win_value'));
    //     } else {
    //         return redirect()->route('login');
    //     }
    // }

    // public function openBlindBox($id, $times)
    // {
    //     $giftBox = $this->boxService->getItemsByBoxId($id);
    //     $arr = [];
    //     $giftItems = [];
    //     for ($i = 0; $i < count($giftBox->giftItemBox); ++$i) {
    //         $qty[$giftBox->giftItemBox[$i]->giftItems->id] = $giftBox->giftItemBox[$i]->giftItems->qty;
    //         $giftItems[] = $giftBox->giftItemBox[$i]->giftItems;
    //     }

    //     foreach ($qty as $key => $q) {
    //         for ($i = 1; $i <= $q; ++$i) {
    //             $arr[] = GiftItem::where('id', $key)->first();
    //         }
    //     }
    //     $k = array_rand($arr, $times);
    //     if (is_array($k)) {
    //         for ($i = 0; $i < count($k); ++$i) {
    //             print_r($arr[$k[$i]]);
    //         }
    //     } else {
    //         $win_value = $arr[$k];
    //         echo $win_value;
    //     }

    //     $data = $this->boxService->getAll();

    //     return view('ui.home', compact('data'));
    // }
    //  /* testing */
}
