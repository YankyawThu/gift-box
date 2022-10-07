<?php

namespace App\Services\Admin;

use App\Repositories\Admin\BoxRepository;

class BoxService
{
    public function __construct(BoxRepository $boxRepo)
    {
        $this->boxRepo = $boxRepo;
        $this->uploadPhotoFolder = config('media.giftBoxPath');
    }

    public function getAll()
    {
        return $this->boxRepo->getPaginated();
    }

    public function store($request)
    {
        $data['name'] = $request->name;
        $data['image'] = fileUploadToAkoneyaMedia($request->file('image'), $this->uploadPhotoFolder);
        $data['price'] = $request->price;

        return $this->boxRepo->create($data);
    }

    public function getDetail($id)
    {
        return $this->boxRepo->getById($id);
    }

    public function update($request, $id)
    {
        $data['name'] = $request->name;
        if ($request->file('new_image')) {
            try {
                $this->boxRepo->checkImageSizeLimitaion('new_image');
            } catch (\Exception $e) {
                return redirect()->back()->with(['error' => $e->validator])->withInput();
            }

            deleteFileFromAkoneyaMedia($request->old_image);
            $data['image'] = fileUploadToAkoneyaMedia($request->file('new_image'), $this->uploadPhotoFolder);
        } else {
            $data['image'] = $request->old_image;
        }
        $data['price'] = $request->price;

        return $this->boxRepo->update($data, $id);
    }

    public function delete($id)
    {
        $this->boxRepo->delete($id);

        return;
    }
}
