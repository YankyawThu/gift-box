<?php

namespace App\Services\Admin;

use App\Repositories\Admin\UserRepository;

class UserService
{
    private $userRepo;

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

        return $this->userRepo->update($data, $id);
    }

    public function delete($id)
    {
        $this->userRepo->delete($id);

        return;
    }
}
