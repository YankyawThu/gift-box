<?php

namespace App\Services\Admin;

use App\Repositories\Admin\UserRepository;

class UserService
{
    public function __construct(UserRepository $userRepo)
    {
        $this->userRepo = $userRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getAll($filter)
    {
        return $this->userRepo->getPaginatedWithFilter($this->itemPerPage, $filter);
    }

    public function update($request, $id)
    {
        $data['name'] = $request['name'];
        $data['phone'] = $request['phone'];
        $data['coin'] = $request['coin'];
        $data['money'] = $request['money'];

        return $this->userRepo->update($data, $id);
    }

    public function delete($id)
    {
        $this->userRepo->delete($id);

        return;
    }
}
