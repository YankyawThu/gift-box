<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="{{ asset('css/tailwindcss.css') }}">
    <link type="text/css" rel="stylesheet" href="{{ asset('css/ui.css') }}">
    <title>Login</title>
</head>

<body>
    <img src="{{ asset('/image/ui/Cloudy.svg') }}" class="absolute right-0" style="z-index: -9999;">
    <div class="h-screen">
        <img src="{{ asset('/image/ui/Login.svg') }}" alt="" class="m-auto pt-14 z-40">
        <div class="text_c2 text-center text-2xl font-semibold my-6">Login</div>
        <div class="w-80 m-auto">
            <form role="form" method="POST" action="{{ route('login') }}">
                @csrf
                <div class="mb-3">
                    <div class="border_grad1 flex before:rounded-3xl">
                        <div class="flex-none self-center ml-3 w-10">
                            <img src="{{ asset('image/ui/Phone.svg') }}" alt="">
                        </div>
                        <div class="grow">
                            <input class="input_placeholder w-full pl-3 pr-7 py-4 rounded-r-full focus:outline-none bg-transparent text_c1" placeholder="{{ __('Phone Number') }}" type="number" name="phone" value="09123123123" required>
                        </div>
                    </div>
                    @if ($errors->has('phone'))
                        <span class="text-center w-full block">
                            <strong class="text-red-500 text-xs">{{ $errors->first('phone') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="mt-3">
                    <div class="border_grad1 flex before:rounded-3xl">
                        <div class="flex-none self-center ml-3 w-10">
                            <img src="{{ asset('image/ui/Password.svg') }}" alt="">
                        </div>
                        <div class="grow">
                            <input class="input_placeholder w-full pl-3 pr-7 py-4 rounded-r-full focus:outline-none bg-transparent text_c1" name="password" placeholder="{{ __('Password') }}" type="password" value="12345" required>
                        </div>
                    </div>
                    @if ($errors->has('password'))
                        <span class="text-center w-full block">
                            <strong class="text-red-500 text-xs">{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="flex justify-between my-1">
                    <div></div>
                    <div>
                        @if (Route::has('password.request'))
                        <a href="{{ route('password.request') }}" class="text_c2">
                            <small>{{ __('Forgot password?') }}</small>
                        </a>
                        @endif
                    </div>
                </div>
                <div class="my-14">
                    <button type="submit" class="w-full py-4 btn_gradient text-center rounded-full text-white">{{ __('Sign in') }}</button>
                </div>
            </form>
        </div>
        <div class="w-80">
            <div class="absolute bottom-16 inset-x-5 text-center">
                <span class="text_c3 mr-2 text-white">Dont have an account?</span><a href="{{ route('register') }}" class="text_c2">Register Now</a>
            </div>
        </div>
    </div>
</body>

</html>
