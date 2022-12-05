<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = RouteServiceProvider::HOME;

    public function __construct()
    {
        // $this->middleware('guest');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'numeric'],
            'password' => ['required', 'string', 'min:6'],
        ]);
    }

    protected function create(array $data)
    {
        $existedUser = User::where('phone', '+959'.$data['phone'])->first();

        if ($existedUser) {
            throw ValidationException::withMessages(['alreadyUser' => ['Already Register!']]);
        }

        return User::create([
            'name' => $data['username'],
            'nickname' => $data['username'],
            'phone' => '+959'.$data['phone'],
            'password' => Hash::make($data['password']),
            'status' => 'inactive',
            'join_time' => Carbon::now(),
        ]);
    }
}
