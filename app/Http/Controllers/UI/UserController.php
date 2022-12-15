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
use App\Http\Resources\MoneyRecordResourceCollection;
use App\Http\Resources\UnboxResourceCollection;
use App\Services\UI\CollectionService;
use App\Services\UI\PrizeService;
use App\Services\UI\UserService;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct(UserService $userService, CollectionService $collectService, PrizeService $prizeService)
    {
        $this->userService = $userService;
        $this->collectService = $collectService;
        $this->prizeService = $prizeService;
    }

    public function index()
    {
        $user = auth()->user();
        $user->avatar_url = $user->avatar ? getFileUrlFromAkoneyaMedia($user->avatar) : '';

        return Inertia::render('User', ['user' => $user]);
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
        $this->userService->changePhone($request);

        return redirect()->route('otp');
    }

    public function changePassword(PasswordChangeRequest $request)
    {
        return $this->userService->changePassword($request);
    }

    public function setUp()
    {
        $user = auth()->user();
        $user->avatar_url = $user->avatar ? getFileUrlFromAkoneyaMedia($user->avatar) : '';

        return Inertia::render('Setup', ['user' => $user]);
    }

    public function transferWallet(GoToWalletRequest $request)
    {
        $this->userService->transferWallet($request);

        return response()->json(['msg' => 'success']);
    }

    public function getWallet()
    {
        return response()->json(new MoneyRecordResourceCollection($this->userService->getWallet()));
    }

    public function walletIndex()
    {
        return Inertia::render('TransferWallet', ['balance' => auth()->user()->money]);
    }

    public function changePasswordIndex()
    {
        return Inertia::render('ChangePassword');
    }

    public function changePhoneIndex()
    {
        return view('phone');
    }

    public function getUnbox()
    {
        return response()->json(new UnboxResourceCollection($this->prizeService->getUnboxByUserId(auth()->user()->id)));
    }
}
