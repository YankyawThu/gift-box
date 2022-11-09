<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SettingCreateRequest;
use App\Http\Requests\Admin\SettingUpdateRequest;
use App\Models\Setting;
use App\Services\Admin\SettingService;

class SettingController extends Controller
{
    private $settingService;
    public function __construct(SettingService $banner)
    {
        $this->settingService = $banner;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->settingService->allItems()->first();
        if ($data) {
            $data = $data;
            $method = 'PUT';
            $url = route('admin.settings.update', ['setting' => $data->id]);
        } else {
            $method = 'POST';
            $url = route('admin.settings.store');
        }
        return view('admin.settings.index', compact('data', 'method', 'url'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\SettingRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SettingCreateRequest $request)
    {
        $this->settingService->store($request->validated());

        return redirect()->back()->with('status', 'Setting Created Successfully!');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\SettingRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function update(SettingUpdateRequest $request, Setting $setting)
    {
        $this->settingService->update($request->validated(), $setting->id);

        return redirect()->back()->with('status', 'Setting Updated Successfully!');
    }
}
