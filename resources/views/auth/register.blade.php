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
    <title>Register</title>
</head>
<body class="bg-gray-50">
    <div class="h-screen">
        <img src="{{ asset('/image/ui/Login.svg') }}" alt="" class="m-auto pt-14">
        <div class="text-center text-2xl font-semibold my-6">Register</div>
        <div class="w-80 m-auto">
            <form role="form" method="POST" action="{{ route('register') }}">
                @csrf
                <div class="mb-3 home_search rounded-full bg-white">
                    <div class="flex">
                        <div class="flex-none self-center ml-3 w-10">
                            <img src="{{ asset('image/ui/Username.svg') }}" alt="">
                        </div>
                        <div class="grow">
                            <input class="w-full pl-3 py-4 rounded-r-full focus:outline-none" placeholder="{{ __('Username') }}" type="text" name="username" required>
                        </div>
                    </div>
                    @if ($errors->has('username'))
                    <span class="">
                        <strong>{{ $errors->first('username') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="mb-3 home_search rounded-full bg-white">
                    <div class="flex">
                        <div class="flex-none self-center ml-3 w-10">
                            <img src="{{ asset('image/ui/Phone.svg') }}" alt="">
                        </div>
                        <div class="grow">
                            <input class="w-full pl-3 py-4 rounded-r-full focus:outline-none" placeholder="{{ __('Phone Number') }}" type="email" name="email" required>
                        </div>
                    </div>
                    @if ($errors->has('email'))
                    <span class="">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="mt-3 home_search rounded-full bg-white">
                    <div class="flex">
                        <div class="flex-none self-center ml-3 w-10">
                            <img src="{{ asset('image/ui/Password.svg') }}" alt="">
                        </div>
                        <div class="grow">
                            <input class="w-full pl-3 py-4 rounded-r-full focus:outline-none" name="password" placeholder="{{ __('Password') }}" type="password" required>
                        </div>
                    </div>
                    @if ($errors->has('password'))
                    <span class="">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="my-14">
                    <button type="submit" class="btn_one text-center py-2 rounded-full text-white w-full">{{ __('Register') }}</button>
                </div>
            </form>
        </div>
        <div class="w-80">
            <div class="absolute bottom-16 inset-x-5 text-center">
                <span class="text-gray-400 mr-2">Dont have an account?</span><a href="{{ route('login') }}">Login Now</a>
            </div>
        </div>
    </div>
</body>
</html>