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
        $data['qty'] = $request->qty;

        return $this->itemRepo->create($data);
    }

    public function getDetail($id)
    {
        return $this->itemRepo->getById($id);
    }

    public function update($request, $id)
    {
        $data['name'] = $request->name;
        if ($request->file('new-image')) {
            try {
                $this->itemRepo->checkImageSizeLimitaion('new-image');
            } catch (\Exception $e) {
                return redirect()->back()->with(['error' => $e->validator])->withInput();
            }

            deleteFileFromAkoneyaMedia($request->image);
            $data['image'] = fileUploadToAkoneyaMedia($request->file('new-image'), $this->uploadPhotoFolder);
        } else {
            $data['image'] = $request->image;
        }
        $data['price'] = $request->price;
        $data['qty'] = $request->qty;

        return $this->itemRepo->update($data, $id);
    }

    public function delete($id)
    {
        $this->itemRepo->delete($id);

        return;
    }
}
