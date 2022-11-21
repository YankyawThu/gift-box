<?php

namespace App\Repositories\UI;

use App\Exceptions\BadRequestException;
use App\Models\MoneyRecord;
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

    public function decreaseMoney($amount)
    {
        return $this->model->where('id', auth()->user()->id)->decrement('money', $amount);
    }

    public function transferWallet($request)
    {
        $money_before = auth()->user()->money;
        if ($money_before < $request->amount) {
            throw new BadRequestException('Insufficient balance!');
        }
        $this->decreaseMoney($request->amount);
        MoneyRecord::create([
            'user_id' => auth()->user()->id,
            'before' => $money_before,
            'after' => auth()->user()->money,
            'money' => -$request->amount,
            'type' => 'to_coin',
        ]);

        return true;
    }

    public function getWallet($page)
    {
        return MoneyRecord::where('user_id', auth()->user()->id)
        ->orderBy('id', 'desc')
        ->paginate($page);
    }

    public function register($request)
    {
        $existedUser = $this->model->where('phone', $request->phone)->first();
        if ($existedUser) {
            return redirect()->back();
        }
        $this->model->create([
            'name' => $request->userName,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'status' => 'active',
        ]);

        return true;
    }
}
