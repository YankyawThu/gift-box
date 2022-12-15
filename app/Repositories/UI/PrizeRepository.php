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
                'out_trade_no' => date('YmdHis').mt_rand(10000, 99999),
                'gift_log_id' => $log->id,
                'gift_item_id' => $goods->id,
                'gift_item_name' => $goods->name,
                'gift_item_buy_price' => $goods->buy_price,
                'gift_item_sell_price' => $goods->sell_price,
                'status' => 1,
                'delivery_fee' => $goods->delivery_fee,
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

        return $this->model->where('user_id', auth()->user()->id)->where('status', $status)->orderBy('id', 'desc')->paginate($page);
        // if ($request->status == 1) {
        //     return $this->model->where('user_id', auth()->user()->id)->where('status', $status)->where('is_collect', 1)->orderBy('id', 'desc')->paginate($page);
        // } else {
        //     return $this->model->where('user_id', auth()->user()->id)->where('status', $status)->orderBy('id', 'desc')->paginate($page);
        // }
    }

    public function savePrizeRecycle($request)
    {
        $prizeIds = array_unique($request->prizeIds);
        $total = 0;
        $prizeCount = [];
        $prizeInfo = [];
        $money_before = auth()->user()->money;

        foreach ($prizeIds as $prizeId) {
            $prize = $this->model->where('user_id', auth()->user()->id)->where('id', $prizeId)->where('status', 'bag')->first();
            if (!$prize) {
                throw new BadRequestException('Wrong blind box selected!');
            }
            // $pendingDeliver = PendingDeliver::where('user_id', auth()->user()->id)->where('prize_id', $prizeId)->where('status', 'bag')->first();
            // if ($pendingDeliver) {
            //     $pendingDeliver->status = 'exchange';
            //     $pendingDeliver->exchange_time = now();
            //     $pendingDeliver->save();
            //     $total += $pendingDeliver->gift_item_sell_price;

            //     if (empty($prizeCount[$pendingDeliver->gift_item_id])) {
            //         $prizeCount[$pendingDeliver->gift_item_id] = 1;
            //     } else {
            //         ++$prizeCount[$pendingDeliver->gift_item_id];
            //     }

            //     $prizeInfo[$pendingDeliver->gift_item_id] = [
            //         'name' => $pendingDeliver->gift_item_name,
            //         'num' => $prizeCount[$pendingDeliver->gift_item_id],
            //         'price' => $pendingDeliver->gift_item_sell_price,
            //     ];
            //     Recycle::create([
            //         'user_id' => auth()->user()->id,
            //         'gift_prize_id' => $prize->id,
            //         'gift_box_id' => $pendingDeliver->gift_box_id,
            //         'gift_log_id' => $pendingDeliver->gift_log_id,
            //         'gift_item_id' => $pendingDeliver->gift_item_id,
            //         'gift_item_name' => $pendingDeliver->gift_item_name,
            //         'gift_item_image' => $pendingDeliver->gift_item_image,
            //         'price' => $pendingDeliver->gift_item_sell_price,
            //         'status' => 0,
            //         'exchange_time' => now(),
            //     ]);

            //     // $this->userRepo->increaseMoney($amount);
            //     MoneyRecord::create([
            //         'user_id' => auth()->user()->id,
            //         'before' => $money_before,
            //         'after' => auth()->user()->money,
            //         'money' => $pendingDeliver->gift_item_sell_price,
            //         'prize_id' => $pendingDeliver->id,
            //         'type' => 'box_exchange',
            //     ]);
            // } else {
            $prize->is_save = 1;
            $prize->status = 'exchange';
            $prize->exchange_time = now();
            $prize->save();
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

            $recycle = Recycle::create([
                'user_id' => auth()->user()->id,
                'out_trade_no' => $prize->out_trade_no,
                'gift_prize_id' => $prize->id,
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
                'order_id' => $recycle->id,
                'prize_id' => $prize->id,
                'type' => 'recycle',
                'status' => 'pending',
            ]);
            // }
        }

        return [
            'amount' => $total,
            'prizeInfo' => array_values($prizeInfo),
        ];
    }

    public function shipmentApply($request)
    {
        $prizeIds = array_unique($request->prizeIds);
        $money_before = auth()->user()->money;
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
            if ($money_before < $prize->delivery_fee) {
                throw new BadRequestException('Not Enough Your Amount!');
            }

            // $pendingDeliver = PendingDeliver::where('user_id', auth()->user()->id)->where('id', $prizeId)->where('status', 'bag')->first();
            // if ($pendingDeliver) {
            //     $pendingDeliver->status = 'delivery';
            //     $pendingDeliver->delivery_time = now();
            //     $pendingDeliver->save();
            // }
            $prize->status = 'delivery';
            $prize->delivery_time = now();
            $prize->save();
            $delivery_fee += $prize->delivery_fee;
        }

        $trade = DeliveryTrade::create([
            'user_id' => auth()->user()->id,
            'amount' => round($delivery_fee, 2),
            'status' => 'unpay',
            'out_trade_no' => date('YmdHis').mt_rand(10000, 99999),
        ]);
        foreach ($prizeIds as $prizeId) {
            $prize = $this->model->where('user_id', auth()->user()->id)->where('id', $prizeId)->first();

            $order = DeliveryOrder::create([
                'gift_log_id' => $prize->gift_log_id,
                'out_trade_no' => $prize->out_trade_no,
                'delivery_trade_id' => $trade->id,
                'delivery_order_no' => date('YmdHis').mt_rand(1000, 9999),
                'gift_box_id' => optional($prize->giftLog)->gift_box_id,
                'gift_item_id' => $prize->gift_item_id,
                'gift_prize_id' => $prize->id,
                'gift_item_name' => $prize->gift_item_name,
                'gift_item_image' => $prize->gift_item_image,
                'user_id' => auth()->user()->id,
                'address_id' => $request->addressId,
                'user_name' => $address->username,
                'phone' => $address->phone,
                'township_id' => $address->township_id,
                'address' => $address->address,
                'delivery_time' => now(),
            ]);
            MoneyRecord::create([
                'user_id' => auth()->user()->id,
                'before' => $money_before,
                'after' => auth()->user()->money,
                'money' => -(optional($prize->giftItem)->buy_price + $delivery_fee),
                'prize_id' => $prizeId,
                'order_id' => $order->id,
                'type' => 'deliver',
                'status' => 'pending',
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
                'delivery_fee' => $prize->delivery_fee,
            ]);
            $prize->is_collect = 1;
            $prize->save();
        }

        return true;
    }

    public function getUnboxByUserId($userId)
    {
        return $this->model->where('user_id', $userId)->paginate(config('enums.itemPerPage'));
    }
}
