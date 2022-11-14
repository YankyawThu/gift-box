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
    <title>Register</title>
</head>
<body>
  
    @if ($errors->has('alreadyUser'))
        <span class="text-center w-full block">
            <strong class="text-red-500 text-xs">{{ $errors->first('alreadyUser') }}</strong>
        </span>
    @endif
    <img src="{{ asset('/image/new_ui/Cloudy.svg') }}" class="absolute right-0 -z-50">
    <div class="h-screen">
        <img src="{{ asset('/image/new_ui/Login.svg') }}" alt="" class="m-auto pt-14">
        <div class="text_c2 text-center text-2xl font-semibold my-6">Register</div>
        <div class="w-80 m-auto">
            <form role="form" method="POST" action="{{ route('register') }}">
                @csrf
                <div class="mb-3">
                    <div class="border_grad1 flex">
                        <div class="flex-none self-center ml-3 w-10">
                            <img src="{{ asset('image/ui/Username.svg') }}" alt="">
                        </div>
                        <div class="grow">
                            <input class="w-full pl-3 pr-7 py-4 rounded-r-full focus:outline-none input_placeholder bg-transparent text_c1" placeholder="{{ __('Username') }}" type="text" name="username" required>
                        </div>
                    </div>
                    @if ($errors->has('username'))
                    <span class="">
                        <strong>{{ $errors->first('username') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="mb-3">
                    <div class="border_grad1 flex">
                        <div class="flex-none self-center ml-3 w-10">
                            <img src="{{ asset('image/ui/Phone.svg') }}" alt="">
                        </div>
                        <div class="grow">
                            <input class="w-full pl-3 pr-7 py-4 rounded-r-full focus:outline-none input_placeholder bg-transparent text_c1" placeholder="{{ __('Phone Number') }}" type="text" name="phone" required>
                        </div>
                    </div>
                    @if ($errors->has('phone'))
                    <span class="">
                        <strong>{{ $errors->first('phone') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="mt-3">
                    <div class="border_grad1 flex">
                        <div class="flex-none self-center ml-3 w-10">
                            <img src="{{ asset('image/ui/Password.svg') }}" alt="">
                        </div>
                        <div class="grow">
                            <input class="w-full pl-3 pr-7 py-4 rounded-r-full focus:outline-none input_placeholder bg-transparent text_c1" name="password" placeholder="{{ __('Password') }}" type="password" required>
                        </div>
                    </div>
                    @if ($errors->has('password'))
                    <span class="">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                    @endif
                </div>
                <div class="my-14">
                    <button type="submit" class="btn_gradient text-center py-4 rounded-full text-white w-full">{{ __('Register') }}</button>
                </div>
            </form>
        </div>
        <div class="w-80">
            <div class="absolute bottom-16 inset-x-5 text-center">
                <span class="text_c3 mr-2">Dont have an account?</span><a href="{{ route('login') }}" class="text_c2">Login Now</a>
            </div>
        </div>
    </div>
</body>
</html>
