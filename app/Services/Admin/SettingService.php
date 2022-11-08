<?php

namespace App\Services\Admin;

use App\Repositories\Admin\SettingRepository;

class SettingService
{
    private $settingRepo;
    private $uploadPhotoFolder;
    public function __construct(SettingRepository $settingRepo)
    {
        $this->settingRepo = $settingRepo;
        $this->itemPerPage = config('enums.itemPerPage');
        $this->uploadPhotoFolder = config('media.giftSettingPath');
    }

    public function getById($id)
    {
        return $this->settingRepo->getById($id);
    }


    public function getAll($filter)
    {
        return $this->settingRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }

    public function allItems()
    {
        return $this->settingRepo->getPaginated();
    }

    public function store($request)
    {
        $data['logo_image'] = fileUploadToAkoneyaMedia(request()->file('logo_image'), $this->uploadPhotoFolder);
        $data['one_rmb_to_coin_num'] = $request['one_rmb_to_coin_num'];
        $data['recovery_discount'] = $request['recovery_discount'];
        $data['hot_box_banner'] = fileUploadToAkoneyaMedia(request()->file('hot_box_banner'), $this->uploadPhotoFolder);
        $data['cheap_box_banner'] = fileUploadToAkoneyaMedia(request()->file('cheap_box_banner'), $this->uploadPhotoFolder);
        $data['service_number'] = fileUploadToAkoneyaMedia(request()->file('service_number'), $this->uploadPhotoFolder);
        $data['service_qrcode'] = fileUploadToAkoneyaMedia(request()->file('service_qrcode'), $this->uploadPhotoFolder);
        $data['retail_1'] = $request['retail_1'];
        $data['retail_2'] = $request['retail_2'];
        $data['retail_3'] = $request['retail_3'];
        $data['kou'] = $request['kou'];

        return $this->settingRepo->create($data);
    }

    public function getDetail($id)
    {
        return $this->settingRepo->getById($id);
    }

    public function update($request, $id)
    {
        $setting = $this->getDetail($id);
        if (request()->file('logo_image')) {
            deleteFileFromAkoneyaMedia($setting->logo_image);
            $data['logo_image'] = fileUploadToAkoneyaMedia(request()->file('logo_image'), $this->uploadPhotoFolder);
        }
        if (request()->file('hot_box_banner')) {
            deleteFileFromAkoneyaMedia($setting->hot_box_banner);
            $data['hot_box_banner'] = fileUploadToAkoneyaMedia(request()->file('hot_box_banner'), $this->uploadPhotoFolder);
        }
        if (request()->file('cheap_box_banner')) {
            deleteFileFromAkoneyaMedia($setting->cheap_box_banner);
            $data['cheap_box_banner'] = fileUploadToAkoneyaMedia(request()->file('cheap_box_banner'), $this->uploadPhotoFolder);
        }
        if (request()->file('service_number')) {
            deleteFileFromAkoneyaMedia($setting->service_number);
            $data['service_number'] = fileUploadToAkoneyaMedia(request()->file('service_number'), $this->uploadPhotoFolder);
        }
        if (request()->file('service_qrcode')) {
            deleteFileFromAkoneyaMedia($setting->service_qrcode);
            $data['service_qrcode'] = fileUploadToAkoneyaMedia(request()->file('service_qrcode'), $this->uploadPhotoFolder);
        }

        $data['one_rmb_to_coin_num'] = $request['one_rmb_to_coin_num'];
        $data['recovery_discount'] = $request['recovery_discount'];
        $data['retail_1'] = $request['retail_1'];
        $data['retail_2'] = $request['retail_2'];
        $data['retail_3'] = $request['retail_3'];
        $data['kou'] = $request['kou'];
        return $this->settingRepo->update($data, $id);
    }

    public function delete($id)
    {
        $this->settingRepo->delete($id);

        return;
    }
}
