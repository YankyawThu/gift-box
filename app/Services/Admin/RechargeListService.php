<?php

namespace App\Services\Admin;

use App\Repositories\Admin\RechargeListRepository;

class RechargeListService
{
    private $rechargeListRepo;
    public function __construct(RechargeListRepository $rechargeListRepo)
    {
        $this->rechargeListRepo = $rechargeListRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll($filter)
    {
        return $this->rechargeListRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }

    public function allItems()
    {
        return $this->rechargeListRepo->getPaginated();
    }

    public function store($request)
    {
        $data['amount'] = $request['amount'];

        return $this->rechargeListRepo->create($data);
    }

    public function getDetail($id)
    {
        return $this->rechargeListRepo->getById($id);
    }

    public function update($request, $id)
    {
        $data['amount'] = $request['amount'];

        return $this->rechargeListRepo->update($data, $id);
    }

    public function delete($id)
    {
        $this->rechargeListRepo->delete($id);

        return;
    }

    public function getItems()
    {
        return $this->rechargeListRepo->getPaginated($this->itemPerPage);
    }
}
