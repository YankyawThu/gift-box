<?php

namespace App\Services\UI;

use App\Repositories\UI\UserRepository;

class UserService
{
    public function __construct(UserRepository $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    public function changeAvatar($request)
    {
        return $this->userRepo->changeAvatar($request);
    }

    public function changeNickname($request)
    {
        return $this->userRepo->changeNickname($request);
    }
}
