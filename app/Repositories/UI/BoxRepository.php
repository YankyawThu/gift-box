<?php

namespace App\Repositories\UI;

use App\Models\Banner;
use App\Models\GiftBox;
use App\Repositories\BaseRepository;

class BoxRepository extends BaseRepository
{
    public function __construct(GiftBox $model, Banner $bannerModel)
    {
        $this->model = $model;
        $this->bannerModel = $bannerModel;
    }

    public function getBanners()
    {
        return $this->bannerModel->orderBy('sort')->pluck('image');
    }

    public function increaseSale($boxId, $times)
    {
        return $this->model->where('id', $boxId)->increment('sale', $times);
    }

    public function getDataWithPaginatedAndFilter($page = null, $request)
    {
        if ($request->price == 'desc') {
            return $this->model->orderBy('price', 'desc')->paginate($page ?? config('enums.itemPerPage'));
        } elseif ($request->price == 'asc') {
            return $this->model->orderBy('price', 'asc')->paginate($page ?? config('enums.itemPerPage'));
        } else {
            return $this->model->orderBy('id', 'desc')->paginate($page ?? config('enums.itemPerPage'));
        }
    }
}

