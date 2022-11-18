<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    // protected $redirectTo = '/otp';

    // public function showRegistrationForm()
    // {
    //     return view('auth.register');
    // }

    use RegistersUsers;

    protected $redirectTo = RouteServiceProvider::HOME;

    public function __construct()
    {
        // $this->middleware('guest');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => ['required', 'alpha_num', 'max:255'],
            'code' => ['required'],
            'phone' => ['required', 'numeric'],
            'password' => ['required', 'string', 'min:8'],
        ]);
    }

    // public function register(Request $request)
    // {
    //     $this->validator($request->all())->validate();

    //     event(new Registered($user = $this->create($request->all())));

    //     return $this->registered($request, $user)
    //         ?: redirect($this->redirectPath());
    // }

    protected function create(array $data)
    {
        $existedUser = User::where('phone', $data['phone'])->first();

        if ($existedUser) {
            throw ValidationException::withMessages(['alreadyUser' => ['Already Register!']]);
        }

        return User::create([
            'name' => $data['username'],
            'nickname' => $data['username'],
            'phone' => $data['code'].$data['phone'],
            'password' => Hash::make($data['password']),
            'status' => 'inactive',
        ]);
    }

    // protected function registered(Request $request, $user)
    // {
    //     // we can send users account formation email here or anything we want with users even fire that Registered event created earlier
    // }

    // protected function redirectPath()
    // {
    //     if (method_exists($this, 'redirectTo')) {
    //         return $this->redirectTo();
    //     }

    //     return property_exists($this, 'redirectTo') ? $this->redirectTo : '/otp';
    // }
}
