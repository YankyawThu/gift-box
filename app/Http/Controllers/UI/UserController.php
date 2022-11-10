<?php

namespace App\Http\Controllers\UI;

use App\Http\Controllers\Controller;
use App\Http\Requests\GenderChangeRequest;
use App\Http\Requests\GoToWalletRequest;
use App\Http\Requests\PasswordChangeRequest;
use App\Http\Requests\PhoneChangeRequest;
use App\Http\Requests\UserAvatarRequest;
use App\Http\Requests\UserNameChangeRequest;
use App\Http\Requests\UserNicknameRequest;
use App\Http\Resources\CollectionResourceCollection;
use App\Services\UI\CollectionService;
use App\Services\UI\UserService;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct(UserService $userService, CollectionService $collectService)
    {
        $this->userService = $userService;
        $this->collectService = $collectService;
    }

    public function index()
    {
        return Inertia::render('User');
    }

    public function changeAvatar(UserAvatarRequest $request)
    {
        return $this->userService->changeAvatar($request);
    }

    public function changeNickname(UserNicknameRequest $request)
    {
        return $this->userService->changeNickname($request);
    }

    public function collectionIndex()
    {
        return Inertia::render('Collection');
    }

    public function getCollection()
    {
        return response()->json(new CollectionResourceCollection($this->collectService->getCollection()));
    }

    public function cancelCollection($id)
    {
        return $this->collectService->cancelCollection($id);
    }

    public function changeGender(GenderChangeRequest $request)
    {
        return $this->userService->changeGender($request);
    }

    public function changeUserName(UserNameChangeRequest $request)
    {
        return $this->userService->changeUserName($request);
    }

    public function changePhone(PhoneChangeRequest $request)
    {
        return $this->userService->changePhone($request);
    }

    public function changePassword(PasswordChangeRequest $request)
    {
        return $this->userService->changePassword($request);
    }

    public function setUp()
    {
        return Inertia::render('Setup');
    }

    public function moneyToCoin(GoToWalletRequest $request)
    {
        $this->userService->moneyToCoin($request);

        return response()->json(['msg' => 'success']);
    }
}
