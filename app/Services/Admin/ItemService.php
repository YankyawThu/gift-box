<?php

namespace App\Services\Admin;

use App\Repositories\Admin\ItemRepository;

class ItemService
{
    public function __construct(ItemRepository $itemRepo)
    {
        $this->itemRepo = $itemRepo;
        $this->uploadPhotoFolder = config('media.giftItemPath');
    }

    public function getAll()
    {
        return $this->itemRepo->getPaginated();
    }

    public function store($request)
    {
        $data['name'] = $request->name;
        $data['image'] = fileUploadToAkoneyaMedia($request->file('image'), $this->uploadPhotoFolder);
        $data['price'] = $request->price;

        return $this->itemRepo->create($data);
    }

    public function getDetail($id)
    {
        return $this->itemRepo->getById($id);
    }

    public function update($request, $id)
    {
        $data['name'] = $request->name;
        if ($request->file('new_image')) {
            try {
                $this->itemRepo->checkImageSizeLimitaion('new_image');
            } catch (\Exception $e) {
                return redirect()->back()->with(['error' => $e->validator])->withInput();
            }

            deleteFileFromAkoneyaMedia($request->old_image);
            $data['image'] = fileUploadToAkoneyaMedia($request->file('new_image'), $this->uploadPhotoFolder);
        } else {
            $data['image'] = $request->old_image;
        }
        $data['price'] = $request->price;

        return $this->itemRepo->update($data, $id);
    }

    public function delete($id)
    {
        $this->itemRepo->delete($id);

        return;
    }
}
