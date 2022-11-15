<?php

namespace App\Services\Admin;

use App\Repositories\Admin\ItemRepository;

class ItemService
{
    private $itemRepo;

    public function __construct(ItemRepository $itemRepo)
    {
        $this->itemRepo = $itemRepo;
        $this->uploadPhotoFolder = config('media.giftItemPath');
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll($filter)
    {
        return $this->itemRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }

    public function allItems()
    {
        return $this->itemRepo->getPaginated();
    }

    public function store($request)
    {
        $data['name'] = $request->name;
        $data['image'] = fileUploadToAkoneyaMedia($request->file('image'), $this->uploadPhotoFolder);
        $data['buy_price'] = $request->buy_price;
        $data['sell_price'] = $request->sell_price;
        $data['qty'] = $request->qty;
        $data['delivery_fee'] = $request->delivery_fee;
        $data['status'] = $request->status;

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

            deleteFileFromAkoneyaMedia($request->image);
            $data['image'] = fileUploadToAkoneyaMedia($request->file('new_image'), $this->uploadPhotoFolder);
        } else {
            $data['image'] = $request->image;
        }
        $data['buy_price'] = $request->buy_price;
        $data['sell_price'] = $request->sell_price;
        $data['qty'] = $request->qty;
        $data['delivery_fee'] = $request->delivery_fee;
        $data['status'] = $request->status;

        return $this->itemRepo->update($data, $id);
    }

    public function delete($id)
    {
        $this->itemRepo->delete($id);

        return;
    }

    public function getItems()
    {
        return $this->itemRepo->getPaginated($this->itemPerPage);
    }
}
