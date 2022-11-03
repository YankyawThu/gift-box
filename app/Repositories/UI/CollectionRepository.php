<?php

namespace App\Repositories\UI;

use App\Models\Collection;
use App\Repositories\BaseRepository;

class CollectionRepository extends BaseRepository
{
    public function __construct(Collection $model)
    {
        $this->model = $model;
    }

    public function collect($request)
    {
        foreach ($request->itemId as $v) {
            $this->model->create([
                'user_id' => auth()->user()->id,
                'gift_box_id' => $request->boxId,
                'gift_item_id' => $v,
            ]);
        }

        return true;
    }

    public function getCollection($perPage)
    {
        return $this->model->where('user_id', auth()->user()->id)->groupBy('gift_box_id')->orderBy('id', 'DESC')->paginate($perPage);
    }
}
