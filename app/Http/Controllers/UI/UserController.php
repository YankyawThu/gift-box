<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserAvatarRequest;
use App\Http\Requests\UserNicknameRequest;
use App\Http\Resources\CollectionResourceCollection;
use App\Services\UI\CollectionService;
use App\Services\UI\UserService;

class UserController extends Controller
{
    public function __construct(UserService $userService, CollectionService $collectService)
    {
        $this->userService = $userService;
        $this->collectService = $collectService;
    }

    public function changeAvatar(UserAvatarRequest $request)
    {
        return $this->userService->changeAvatar($request);
    }

    public function changeNickname(UserNicknameRequest $request)
    {
        return $this->userService->changeNickname($request);
    }

    public function getCollection()
    {
        return response()->json(new CollectionResourceCollection($this->collectService->getCollection()));
    }

    public function cancelCollection($id)
    {
        return $this->collectService->cancelCollection($id);
    }
}
