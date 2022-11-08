<?php

namespace App\Services\Admin;

use App\Repositories\Admin\BannerRepository;

class BannerService
{
    private $bannerRepo;
    private $uploadPhotoFolder;
    public function __construct(BannerRepository $bannerRepo)
    {
        $this->bannerRepo = $bannerRepo;
        $this->itemPerPage = config('enums.itemPerPage');
        $this->uploadPhotoFolder = config('media.giftBannerPath');
    }

    public function getAll($filter)
    {
        return $this->bannerRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }

    public function allItems()
    {
        return $this->bannerRepo->getPaginated();
    }

    public function store($request)
    {
        $data['image'] = fileUploadToAkoneyaMedia(request()->file('image'), $this->uploadPhotoFolder);
        $data['place'] = $request['place'];
        $data['type'] = $request['type'];
        $data['status'] = $request['status'];
        $data['sort'] = $request['sort'];
        $data['value'] = $request['value'];
        if (request()->has('value_box')) {
            $data['value'] = $request['value_box'];
        }
        if (request()->has('value_link')) {
            $data['value'] = $request['value_link'];
        }

        return $this->bannerRepo->create($data);
    }

    public function getDetail($id)
    {
        return $this->bannerRepo->getById($id);
    }

    public function update($request, $id)
    {
        if (request()->file('new_image')) {
            try {
                $this->bannerRepo->checkImageSizeLimitaion('new_image');
            } catch (\Exception $e) {
                return redirect()->back()->with(['error' => $e])->withInput();
            }

            deleteFileFromAkoneyaMedia(request()->image);
            $data['image'] = fileUploadToAkoneyaMedia(request()->file('new_image'), $this->uploadPhotoFolder);
        } else {
            $data['image'] = request()->image;
        }

        $data['place'] = $request['place'];
        $data['type'] = $request['type'];
        $data['value'] = $request['value'];
        $data['status'] = $request['status'];
        $data['sort'] = $request['sort'];
        return $this->bannerRepo->update($data, $id);
    }

    public function delete($id)
    {
        $this->bannerRepo->delete($id);

        return;
    }
}
