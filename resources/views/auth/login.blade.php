<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Signika">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="{{ asset('css/tailwindcss.css') }}">
    <link type="text/css" rel="stylesheet" href="{{ asset('css/ui.css') }}">
    <title>Login</title>
</head>

<body class="bg-gray-50">
    <div class="h-screen">
        <img src="{{ asset('/image/ui/Login.svg') }}" alt="" class="m-auto pt-14">
        <div class="text-center text-2xl font-semibold my-6">Login</div>
        <div class="w-80 m-auto">
            <form role="form" method="POST" action="{{ route('login') }}">
                @csrf
                <div class="mb-3 home_search rounded-full bg-white">
                    <div class="flex">
                        <div class="flex-none self-center ml-3 w-10">
                            <img src="{{ asset('image/ui/Phone.svg') }}" alt="">
                        </div>
                        <div class="grow">
                            <input class="w-full pl-3 py-4 rounded-r-full focus:outline-none"
                                placeholder="{{ __('Phone Number') }}" type="number" name="phone"
                                value="client@gmail.com" required>
                        </div>
                    </div>
                    @if ($errors->has('phone'))
                    <span class="">
                        <strong>{{ $errors->first('phone') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="mt-3 home_search rounded-full bg-white">
                    <div class="flex">
                        <div class="flex-none self-center ml-3 w-10">
                            <img src="{{ asset('image/ui/Password.svg') }}" alt="">
                        </div>
                        <div class="grow">
                            <input class="w-full pl-3 py-4 rounded-r-full focus:outline-none" name="password"
                                placeholder="{{ __('Password') }}" type="password" value="12345" required>
                        </div>
                    </div>
                    @if ($errors->has('password'))
                    <span class="">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="flex justify-between my-1">
                    <div></div>
                    <div>
                        @if (Route::has('password.request'))
                        <a href="{{ route('password.request') }}">
                            <small>{{ __('Forgot password?') }}</small>
                        </a>
                        @endif
                    </div>
                </div>
                <div class="btn_one text-center py-2 rounded-full text-white my-14">
                    <button type="submit" class="">{{ __('Sign in') }}</button>
                </div>
            </form>
        </div>
        <div class="w-80">
            <div class="absolute bottom-16 inset-x-5 text-center">
                <span class="text-gray-400 mr-2">Dont have an account?</span><a href="{{ route('register') }}">Register
                    Now</a>
            </div>
        </div>
    </div>
</body>

</html>
