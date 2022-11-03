<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserAvatarRequest;
use App\Http\Requests\UserNicknameRequest;

use App\Services\UI\UserService;

class UserConroller extends Controller
{
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function changeAvatar(UserAvatarRequest $request)
    {
        return $this->userService->changeAvatar($request);
    }

    public function changeNickname(UserNicknameRequest $request)
    {
        return $this->userService->changeNickname($request);
    }
}
