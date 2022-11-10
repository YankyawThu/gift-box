<?php

namespace App\Repositories\UI;

use App\Repositories\BaseRepository;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserRepository extends BaseRepository
{
    public function __construct(User $model)
    {
        $this->model = $model;
        $this->avatarPath = config('media.user');
    }

    public function changeAvatar($request)
    {
        $mediaPath = fileUploadToAkoneyaMedia($request->avatar, $this->avatarPath);

        $this->model->where('id', auth()->user()->id)->update([
            'avatar' => $mediaPath,
        ]);

        return getFileUrlFromAkoneyaMedia($mediaPath);
    }

    public function changeNickname($request)
    {
        $this->model->where('id', auth()->user()->id)->update([
            'nickname' => $request->nickname,
        ]);

        return $request->nickname;
    }

    public function increaseMoney($amount)
    {
        return $this->model->where('id', auth()->user()->id)->increment('money', $amount);
    }

    public function changeGender($request)
    {
        return $this->model->where('id', auth()->user()->id)->update(['gender' => $request->gender]);
    }

    public function changeUserName($request)
    {
        return $this->model->where('id', auth()->user()->id)->update(['name' => $request->name]);
    }

    public function changePhone($request)
    {
        return $this->model->where('id', auth()->user()->id)->update(['phone' => $request->phone]);
    }

    public function changePassword($request, $user)
    {
        return $user->update(['password' => Hash::make($request->newPassword)]);
    }
}
