<?php

namespace App\Repositories\UI;

use App\Exceptions\BadRequestException;
use App\Models\GiftPrizeRecord;
use App\Models\MoneyRecord;
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
                'status' => 3,
                'delivery_time' => now(),
            ]);
            $this->itemRepo->updateQty($goods->id);
            $prizeInfo[] = [
                'prizeId' => intval($prize->id),
                'image' => getFileUrlFromAkoneyaMedia($goods->image),
                'itemName' => $goods->name,
                'price' => $goods->price,
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
    }

    public function savePrizeRecycle($request)
    {
        $prizeIds = array_unique($request->prizeIds);
        $total = 0;
        $prizeCount = [];
        $prizeInfo = [];
        foreach ($prizeIds as $prizeId) {
            $prize = $this->model->where('user_id', auth()->user()->id)->where('id', $prizeId)->where('status', 'bag')->first();

            if (empty($prize)) {
                throw new BadRequestException('Wrong blind box selected!');
            }
            $prize->save(['status' => 'exchange', 'exchange_time' => now()]);
            $money_before = auth()->user()->money;

            $recovery_discount = getSetting('recovery_discount') ? getSetting('recovery_discount') : 0.00;

            $amount = floor($prize->gift_item_coin * round($recovery_discount / 100, 2));

            $total += $amount;

            if (empty($prizeCount[$prize->gift_item_id])) {
                $prizeCount[$prize->gift_item_id] = 1;
            } else {
                ++$prizeCount[$prize->gift_item_id];
            }

            $prizeInfo[$prize->gift_item_id] = [
                'name' => $prize->gift_item_name,
                'num' => $prizeCount[$prize->gift_item_id],
                'price' => $amount,
            ];

            $this->userRepo->increaseMoney($amount);
            MoneyRecord::create([
                'user_id' => auth()->user()->id,
                'before' => $money_before,
                'after' => auth()->user()->money,
                'money' => $amount,
                'prize_id' => $prize->id,
                'type' => 'box_exchange',
            ]);
        }

        return [
            'amount' => $total,
            'prizeInfo' => array_values($prizeInfo),
        ];
    }
}
