<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use App\Http\Requests\PhoneChangeRequest;
use App\User;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\PasswordChangeRequest;
use App\Services\UI\UserService;
use Illuminate\Http\Request;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    public function sendResetLinkEmail(PhoneChangeRequest $request)
    {
        $user = User::where('phone', '+959'.$request->phone)->first();

        if(!$user) {
            throw ValidationException::withMessages(['alreadyUser' => ['This Phone number was not found']]);
        }
        else return view('auth.otpNotLogin', ['user' => $user, 'token' => $request->_token]);
    }
}
