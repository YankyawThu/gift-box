<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\ShippingAddressCreateRequest;
use App\Http\Resources\ShippingAddressDetailResource;
use App\Http\Resources\ShippingAddressResource;
use App\Http\Resources\ZoneResource;
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

    public function getAll()
    {
        return response()->json(ShippingAddressResource::collection($this->addressService->getAllByAuth()));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $zones = ZoneResource::collection(config('zones.zoneSelections'));

        return Inertia::render('CreateAddress', compact('zones'));
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
        $data = new ShippingAddressDetailResource($this->addressService->getById($id));

        $zones = ZoneResource::collection(config('zones.zoneSelections'));

        return Inertia::render('EditAddress', compact('data', 'zones'));
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
        $this->addressService->destroy($id);

        return $this->index();
    }

    public function getTownshipByZoneId($zoneId)
    {
        return response()->json($this->addressService->getTownshipByZoneId($zoneId));
    }
}
