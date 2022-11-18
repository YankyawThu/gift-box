<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
     */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $_redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest')->except('logout');
    }

    public function credentials(Request $request)
    {
        return $request->only($this->username(), 'password');
    }

    public function attemptLogin(Request $request)
    {
        return Auth::attempt([
                'phone' => $request->code.$request->phone,
                'password' => $request->password,
        ]);
    }

    public function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        if ($response = $this->loggedOut($request)) {
            return $response;
        }

        return redirect()->route('login');
    }

    public function username()
    {
        return 'phone';
    }

    public function otp()
    {
        return view('auth.otp',['phone' => auth()->user()->phone]);
    }

    public function verifyOTP()
    {
        User::where('id' , auth()->user()->id)->update(['status' => 'active' ]);
        return redirect()->route('box');
    }

    public function redirectPath()
    {
        return route('box');
    }
}
