<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\ShippingAddressCreateRequest;
use App\Http\Resources\ShippingAddressDetailResource;
use App\Http\Resources\ShippingAddressResource;
use App\Services\UI\ShippingAddressService;
use Inertia\Inertia;

class ShippingAddressController extends Controller
{
    public function __construct(ShippingAddressService $addressService)
    {
        $this->addressService = $addressService;
    }

    public function index()
    {
        $data = ShippingAddressResource::collection($this->addressService->getAllByAuth());
        return Inertia::render('Address', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(ShippingAddressCreateRequest $request)
    {
        return $this->addressService->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ShippingAddressDetailResource($this->addressService->getById($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(ShippingAddressCreateRequest $request, $id)
    {
        return $this->addressService->update($request, $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->addressService->destroy($id);
    }
}
