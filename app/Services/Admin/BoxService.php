<?php

namespace App\Services\Admin;

use App\Repositories\Admin\BoxRepository;

class BoxService
{
    private $boxRepo;
    public function __construct(BoxRepository $boxRepo)
    {
        $this->boxRepo = $boxRepo;
        $this->uploadPhotoFolder = config('media.giftBoxPath');
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll($filter)
    {
        return $this->boxRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }

    public function store($request)
    {
        $data['category_id'] = $request->categoryId;
        $data['name'] = $request->name;
        $data['image'] = fileUploadToAkoneyaMedia($request->file('image'), $this->uploadPhotoFolder);
        $data['price'] = $request->price;
        $data['sort'] = $request->sort;
        $data['is_hot'] = $request->is_hot;
        $data['is_cheap'] = $request->is_cheap;

        return $this->boxRepo->create($data);
    }

    public function getDetail($id)
    {
        $data = [];
        $giftItems = [];
        $giftItemBoxes = [];
        $box = $this->boxRepo->getById($id);
        $data['category'] = optional($box->category)->name;
        $data['id'] = $box->id;
        $data['name'] = $box->name;
        $data['image'] = $box->image;
        $data['created'] = $box->created_at;
        $data['sort'] = $box->sort;
        $data['is_hot'] = $box->is_hot;
        $data['is_cheap'] = $box->is_cheap;

        foreach ($box->giftItemBox as $key => $v) {
            $giftItems[] = $v->giftItems;
            $giftItemBoxes[$key]['id'] = $v->id;
            $giftItemBoxes[$key]['probability'] = $v->probability;
        }
        $data['boxItems'] = $giftItems;
        $data['giftBoxItems'] = $giftItemBoxes;

        return $data;
    }

    public function update($request, $id)
    {
        $data['category_id'] = $request->categoryId;
        $data['name'] = $request->name;
        if ($request->file('new_image')) {
            try {
                $this->boxRepo->checkImageSizeLimitaion('new_image');
            } catch (\Exception $e) {
                return redirect()->back()->with(['error' => $e->validator])->withInput();
            }

            deleteFileFromAkoneyaMedia($request->image);
            $data['image'] = fileUploadToAkoneyaMedia($request->file('new_image'), $this->uploadPhotoFolder);
        } else {
            $data['image'] = $request->image;
        }
        $data['price'] = $request->price;
        $data['sort'] = $request->sort;
        $data['is_hot'] = $request->is_hot;
        $data['is_cheap'] = $request->is_cheap;

        return $this->boxRepo->update($data, $id);
    }

    public function delete($id)
    {
        $this->boxRepo->delete($id);

        return;
    }
}
