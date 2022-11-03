<?php

namespace App\Http\Controllers\UI;

use App\Exceptions\BadRequestException;
use App\Http\Controllers\Controller;
use App\Http\Requests\CollectRequest;
use App\Http\Requests\OpenBoxRequest;
use App\Http\Resources\HomePageResource;
use App\Http\Resources\HomePageResourceCollection;
use App\Services\UI\BoxService;
use App\Services\UI\CollectionService;
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
    public function __construct(BoxService $boxService, ItemService $itemService, GiftItemBoxService $itemBoxService, PrizeService $prizeService, GiftLogService $giftLogService, CollectionService $collectService)
    {
        // $this->middleware('auth');
        $this->boxService = $boxService;
        $this->itemService = $itemService;
        $this->itemBoxService = $itemBoxService;
        $this->prizeService = $prizeService;
        $this->giftLogService = $giftLogService;
        $this->collectService = $collectService;
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

    public function boxOpen($id, $time)
    {
        return Inertia::render('OpenBox', ['id' => $id, 'time' => $time]);
    }

    public function createOrder($boxId, $times)
    {
        $box = $this->boxService->getById($boxId);
        if (!$box) {
            throw new BadRequestException('Wrong box number!');
        }
        if (!in_array($times, [1, 5])) {
            throw new BadRequestException('Wrong number of unpacked!');
        }
        $data = new HomePageResource($box);
        $order = $this->giftLogService->store($box, $times);
        $result = [
            'orderId' => intval($order->id),
            'coinNotEnough' => (bool) (intval(auth()->user()->money) < intval($order->amount)),
            'data' => $data,
        ];

        return $result;
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

    public function collect(CollectRequest $request)
    {
        $this->collectService->collect($request);

        return 'success';
    }

    public function getBanners()
    {
        return $this->boxService->getBanners();
    }
}
