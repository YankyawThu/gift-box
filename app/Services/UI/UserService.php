<?php

namespace App\Services\UI;

use App\Repositories\UI\UserRepository;

class UserService
{
    public function __construct(UserRepository $userRepo)
    {
        $this->userRepo = $userRepo;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function changeAvatar($request)
    {
        return $this->userRepo->changeAvatar($request);
    }

    public function changeNickname($request)
    {
        return $this->userRepo->changeNickname($request);
    }

    public function changeGender($request)
    {
        return $this->userRepo->changeGender($request);
    }

    public function changeUserName($request)
    {
        return $this->userRepo->changeUserName($request);
    }

    public function changePhone($request)
    {
        return $this->userRepo->changePhone($request);
    }

    public function changePassword($request)
    {
        $user = $this->userRepo->getById(auth()->user()->id);

        return $this->userRepo->changePassword($request, $user);
    }

    public function transferWallet($request)
    {
        return $this->userRepo->transferWallet($request);
    }

    public function getWallet()
    {
        return $this->userRepo->getWallet($this->itemPerPage);
    }

    public function register($request)
    {
        return $this->userRepo->register($request);
    }
}
