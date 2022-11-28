<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;
use App\User;
use App\Services\UI\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    protected function credentials(Request $request)
    {
        return $request->only(
            'newPassword', 'confirmNewPassword', 'token'
        );
    }

    protected function rules()
    {
        return [
            'token' => 'required',
            'newPassword' => 'required|min:6',
            'confirmNewPassword' => 'required|min:6',
        ];
    }

    public function showResetForm(Request $request, $token = null)
    {
        return view('auth.passwords.reset')->with(
            ['token' => $token, 'phone' => $request->phone]
        );
    }

    public function reset(Request $request)
    {
        $request->validate($this->rules());

        $id = User::where('phone', $request->phone)->value('id');
        $response = $this->userService->changePasswordNotLogin($request, $id);

        return redirect()->route('login');
    }
}
