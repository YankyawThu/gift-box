<?php

namespace App\Services\UI;

use App\Exceptions\BadRequestException;
use App\Repositories\UI\UserRepository;
use Illuminate\Support\Facades\Hash;

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
        if (!Hash::check($request->currentPassword, $user->password)) {
            throw new BadRequestException('Current Password Invalid!');
        }

        return $this->userRepo->changePassword($request, $user);
    }

    public function moneyToCoin($request)
    {
        return $this->userRepo->moneyToCoin($request);
    }
}
