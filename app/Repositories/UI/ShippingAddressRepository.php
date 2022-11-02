<?php

namespace App\Repositories\UI;

use App\Models\Address;
use App\Repositories\BaseRepository;

class ShippingAddressRepository extends BaseRepository
{
    public function __construct(Address $model)
    {
        $this->model = $model;
    }

    public function getAllByAuth()
    {
        return $this->model->where('user_id', auth()->user()->id)->get();
    }
}
