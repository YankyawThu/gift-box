<?php

namespace App\Http\Controllers\Admin;

use App\Filters\Admin\BannerFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BannerCreateRequest;
use App\Http\Requests\Admin\BannerUpdateRequest;
use App\Models\Banner;
use App\Services\Admin\BannerService;

class BannerController extends Controller
{
    private $bannerService;
    public function __construct(BannerService $banner)
    {
        $this->bannerService = $banner;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(BannerFilter $filter)
    {
        $data = $this->bannerService->getAll($filter);

        return view('admin.banners.index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\BannerCreateRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BannerCreateRequest $request)
    {
        $this->bannerService->store($request->validated());

        return redirect()->back()->with('status', 'Banner Created Successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function show(Banner $banner)
    {
        $this->bannerService->getDetail($banner);

        return redirect()->back();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function edit(Banner $banner)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\BannerUpdateRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function update(BannerUpdateRequest $request)
    {
        $this->bannerService->update($request->validated(), request()->id);

        return redirect()->back()->with('status', 'Banner Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function destroy(Banner $banner)
    {
        $this->bannerService->delete($banner->id);

        return redirect()->back()->with('status', 'Banner Deleted Successfully!');
    }
}