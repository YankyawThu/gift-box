<?php

namespace App\Repositories\UI;

use App\Exceptions\BadRequestException;
use App\Models\Address;
use App\Models\DeliveryOrder;
use App\Models\DeliveryTrade;
use App\Models\GiftPrizeRecord;
use App\Models\MoneyRecord;
use App\Models\PendingDeliver;
use App\Models\Recycle;
use App\Repositories\BaseRepository;

class PrizeRepository extends BaseRepository
{
    public function __construct(GiftPrizeRecord $model, ItemRepository $itemRepo, UserRepository $userRepo)
    {
        $this->model = $model;
        $this->itemRepo = $itemRepo;
        $this->userRepo = $userRepo;
    }

    public function store($goodsInfo, $log)
    {
        $prizeInfo = [];
        foreach ($goodsInfo as $goods) {
            $prize = $this->model->create([
                'user_id' => auth()->user()->id,
                'gift_log_id' => $log->id,
                'gift_item_id' => $goods->id,
                'gift_item_name' => $goods->name,
                'gift_item_buy_price' => $goods->buy_price,
                'gift_item_sell_price' => $goods->sell_price,
                'status' => 1,
                'delivery_time' => now(),
            ]);
            $this->itemRepo->updateQty($goods->id);
            $prizeInfo[] = [
                'prizeId' => intval($prize->id),
                'image' => getFileUrlFromAkoneyaMedia($goods->image),
                'itemName' => $goods->name,
                'price' => $goods->buy_price,
            ];
        }

        return $prizeInfo;
    }

    public function getBoxCabinet($request, $page)
    {
        $status = $request->status;
        $statusList = [1 => 'bag', 2 => 'exchange'];
        $status = $statusList[$status];
        if ($request->status == 1) {
            return PendingDeliver::where('user_id', auth()->user()->id)->where('status', $status)->orderBy('id', 'desc')->paginate($page);
        } else {
            return Recycle::where('user_id', auth()->user()->id)->orderBy('id', 'desc')->paginate($page);
        }
    }

    public function savePrizeRecycle($request)
    {
        $prizeIds = array_unique($request->prizeIds);
        $total = 0;
        $prizeCount = [];
        $prizeInfo = [];
        foreach ($prizeIds as $prizeId) {
            $prize = $this->model->where('user_id', auth()->user()->id)->where('id', $prizeId)->where('status', 'bag')->first();

            if (!$prize) {
                throw new BadRequestException('Wrong blind box selected!');
            }
            $prize->status = 'exchange';
            $prize->exchange_time = now();
            $prize->save();
            $money_before = auth()->user()->money;

            $total += optional($prize->giftItem)->sell_price;

            if (empty($prizeCount[$prize->gift_item_id])) {
                $prizeCount[$prize->gift_item_id] = 1;
            } else {
                ++$prizeCount[$prize->gift_item_id];
            }

            $prizeInfo[$prize->gift_item_id] = [
                'name' => $prize->gift_item_name,
                'num' => $prizeCount[$prize->gift_item_id],
                'price' => optional($prize->giftItem)->sell_price,
            ];
            Recycle::create([
                'user_id' => auth()->user()->id,
                'gift_box_id' => optional(optional($prize->giftLog)->giftBox)->id,
                'gift_log_id' => optional($prize->giftLog)->id,
                'gift_item_id' => $prize->gift_item_id,
                'gift_item_name' => $prize->gift_item_name,
                'gift_item_image' => $prize->gift_item_image,
                'price' => $prize->gift_item_sell_price,
                'status' => 0,
                'exchange_time' => $prize->exchange_time,
            ]);

            // $this->userRepo->increaseMoney($amount);
            MoneyRecord::create([
                'user_id' => auth()->user()->id,
                'before' => $money_before,
                'after' => auth()->user()->money,
                'money' => optional($prize->giftItem)->sell_price,
                'prize_id' => $prize->id,
                'type' => 'box_exchange',
            ]);
        }

        return [
            'amount' => $total,
            'prizeInfo' => array_values($prizeInfo),
        ];
    }

    public function shipmentApply($request)
    {
        $prizeIds = array_unique($request->prizeIds);

        $delivery_fee = 0;
        $address = Address::where('id', $request->addressId)->first();
        if (!$address) {
            throw new BadRequestException('Wrong Address!');
        }
        foreach ($prizeIds as $prizeId) {
            $prize = $this->model->where('user_id', auth()->user()->id)->where('id', $prizeId)->where('status', 'bag')->first();

            if (!$prize) {
                throw new BadRequestException('Wrong blind box selected!');
            }
            $delivery_fee += $prize->delivery_fee;
            $prize->status = 'delivery';
            $prize->delivery_time = now();
            $prize->save();
        }
        $trade = DeliveryTrade::create([
            'user_id' => auth()->user()->id,
            'amount' => round($delivery_fee, 2),
            'status' => 'unpay',
            'out_trade_no' => date('YmdHis').mt_rand(10000, 99999),
        ]);
        foreach ($prizeIds as $prizeId) {
            $prize = $this->model->where('id', $prizeId)->first();
            DeliveryOrder::create([
                'gift_log_id' => $prize->gift_log_id,
                'out_trade_no' => $prize->out_trade_no,
                'delivery_trade_id' => $trade->id,
                'delivery_order_no' => date('YmdHis').mt_rand(1000, 9999),
                'gift_prize_id' => $prize->id,
                'gift_item_name' => $prize->gift_item_name,
                'gift_item_image' => $prize->gift_item_image,
                'user_id' => auth()->user()->id,
                'address_id' => $request->addressId,
                'user_name' => $address->username,
                'phone' => $address->phone,
                'township_id' => $address->township_id,
                'address' => $address->address,
            ]);
        }

        return true;
    }

    public function collect($request)
    {
        foreach ($request->prizeIds as $prizeId) {
            $prize = $this->model->where('user_id', auth()->user()->id)->where('id', $prizeId)->where('status', 'bag')->first();
            PendingDeliver::create([
                'user_id' => auth()->user()->id,
                'gift_box_id' => optional(optional($prize->giftLog)->giftBox)->id,
                'gift_log_id' => $prize->gift_log_id,
                'gift_item_id' => $prize->gift_item_id,
                'prize_id' => $prizeId,
                'gift_item_name' => $prize->gift_item_name,
                'gift_item_image' => $prize->gift_item_image,
                'gift_item_buy_price' => $prize->gift_item_buy_price,
                'gift_item_sell_price' => $prize->gift_item_sell_price,
                'status' => 1,
                'delivery_time' => $prize->delivery_time,
                'delivery_fee' => $prize->delivery_fee,
            ]);
        }

        return true;
    }
}
