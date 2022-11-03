<?php

namespace App\Repositories\UI;

use App\Repositories\BaseRepository;
use App\User;

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
}
