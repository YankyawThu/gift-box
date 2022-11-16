<?php

namespace App\Services\UI;

use App\Repositories\UI\ShippingAddressRepository;

class ShippingAddressService
{
    public function __construct(ShippingAddressRepository $addressRepo)
    {
        $this->addressRepo = $addressRepo;
    }

    public function getAllByAuth()
    {
        return $this->addressRepo->getAllByAuth();
    }

    public function store($request)
    {
        $data['user_id'] = auth()->user()->id;
        $data['username'] = $request->username;
        $data['phone'] = $request->phone;
        $data['township_id'] = $request->township;
        $data['address'] = $request->address;
        // $data['is_default'] = $request->isDefault;

        return $this->addressRepo->create($data);
    }

    public function getById($id)
    {
        return $this->addressRepo->getById($id);
    }

    public function update($request, $id)
    {
        $data['user_id'] = auth()->user()->id;
        $data['username'] = $request->username;
        $data['phone'] = $request->phone;
        $data['township_id'] = $request->township;
        $data['address'] = $request->address;
        $data['is_default'] = $request->isDefault;

        return $this->addressRepo->update($data, $id);
    }

    public function destroy($id)
    {
        return $this->addressRepo->delete($id);
    }
}
