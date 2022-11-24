<?php

namespace App\Http\Controllers\UI;

use App\Exceptions\BadRequestException;
use App\Filters\UI\GiftBoxFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\BoxCabinetRequest;
use App\Http\Requests\CollectRequest;
use App\Http\Requests\OpenBoxRequest;
use App\Http\Requests\RecycleRequest;
use App\Http\Requests\ShipmentApplyRequest;
use App\Http\Resources\BoxCabinetResourceCollection;
use App\Http\Resources\HelpResource;
use App\Http\Resources\HomePageResource;
use App\Http\Resources\HomePageResourceCollection;
use App\Repositories\UI\UserRepository;
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
    public function __construct(BoxService $boxService, ItemService $itemService, GiftItemBoxService $itemBoxService, PrizeService $prizeService, GiftLogService $giftLogService, CollectionService $collectService, UserRepository $userRepo)
    {
        // $this->middleware('auth');
        $this->boxService = $boxService;
        $this->itemService = $itemService;
        $this->itemBoxService = $itemBoxService;
        $this->prizeService = $prizeService;
        $this->giftLogService = $giftLogService;
        $this->collectService = $collectService;
        $this->userRepo = $userRepo;
        $this->nextId = null;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $banners = $this->boxService->getBanners();

        return Inertia::render('Home', ['user' => auth()->user(), 'banners' => $banners]);
    }

    public function detail($id)
    {
        $data = new HomePageResource($this->boxService->getById($id));

        return Inertia::render('BoxDetail', compact('data'));
    }

    public function getAll(GiftBoxFilter $filter)
    {
        $result = $this->boxService->getAll($filter);
        $data = new HomePageResourceCollection($result);

        return response()->json($data);
    }

    public function tidePlay()
    {
        return Inertia::render('TidePlay');
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
        $box->price = $box->price * $times;
        $data = new HomePageResource($box);
        $order = $this->giftLogService->store($box, $times);
        $result = [
            'orderId' => intval($order->id),
            'coinNotEnough' => (bool) (intval(auth()->user()->money) < intval($order->price)),
            'data' => $data,
        ];

        return $result;
    }

    public function openLuckyBox(OpenBoxRequest $request, $id)
    {
        $box = $this->boxService->getById($id);

        if (!$box) {
            throw new BadRequestException('Wrong box number!');
        }
        if (!in_array($request->times, [1, 5])) {
            throw new BadRequestException('Wrong number of unpacked!');
        }

        $log = $this->giftLogService->getById($request->orderId);

        $goodsIds = $this->itemBoxService->getItemsByBoxId($id);

        if ($request->times == 1) {
            $itemIds = [$this->itemService->getOne($id, $goodsIds, $except = [])];
        } else {
            $itemIds = $this->itemService->getMore($id, $goodsIds, $request->times);
        }

        foreach ($itemIds as $itemId) {
            $goodsInfo[] = $this->itemService->getById($itemId);
        }

        $log->status = 2;
        $log->save();
        $prize = $this->prizeService->store($goodsInfo, $log);
        $this->boxService->increaseSale($id, $request->times);
        $this->userRepo->decreaseMoney($log->price);

        return $prize;
    }

    public function collect(CollectRequest $request)
    {
        $this->prizeService->collect($request);

        return 'success';
    }

    public function getBoxCabinet(BoxCabinetRequest $request)
    {
        return new BoxCabinetResourceCollection($this->prizeService->getBoxCabinet($request));
    }

    public function helps()
    {
        $data = HelpResource::collection(getHelp(8));

        return Inertia::render('Helps', compact('data'));
    }

    public function savePrizeRecycle(RecycleRequest $request)
    {
        return $this->prizeService->savePrizeRecycle($request);
    }

    public function shipmentApply(ShipmentApplyRequest $request)
    {
        $data = $this->prizeService->shipmentApply($request);

        return response()->json($data);
    }

    public function exchangeIndex()
    {
        return Inertia::render('Exchange');
    }

    public function walletIndex()
    {
        return Inertia::render('Wallet');
    }
}
