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
    <script src="{{ asset('argon') }}/vendor/jquery/dist/jquery.min.js"></script>
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
                    <div class="flex w-full">
                        <div class="border_grad1 flex before:rounded-3xl w-24 mr-2">
                            <select id="codeSelect" name="code" class="apperance-none focus:outline-none bg-transparent w-20 text_c1 mx-2">
                                @foreach (config('countryCodes') as $code)
                                    <option value="{{ $code['dial_code'] }}">{{ $code['dial_code'] }} ({{ $code['name'] }})</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="grow flex-none border_grad1 before:rounded-3xl">
                            <input class="input_placeholder w-full px-5 py-4 rounded-r-full focus:outline-none bg-transparent text_c1" placeholder="{{ __('Phone Number') }}" type="text" name="phone" value="123123123" required>
                        </div>
                    </div>
                    @if ($errors->has('phone'))
                        <div class="text-center">
                            <strong class="text-red-500 text-xs">{{ $errors->first('phone') }}</strong>
                        </div>
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
                        <div class="text-center">
                            <strong class="text-red-500 text-xs">{{ $errors->first('password') }}</strong>
                        </div>
                    @endif
                </div>
                <div class="flex justify-between my-1">
                    <div></div>
                    <div>
                        @if (Route::has('password.request'))
                        {{-- <a href="{{ route('password.request') }}" class="text_c2"> --}}
                        <a href="#" class="text_c2">
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
    <script>
        var val = $("#codeSelect").val();
        var lbl = $("#codeSelect option:selected").text();
        $("#codeSelect").prepend("<option value='" + val + "' data-value='selected' selected hidden>" + val + "</option>");

        $("#codeSelect").on('change', function() {
            var val = $("#codeSelect").val();
            var lbl = $("#codeSelect option:selected").text();
            
            $("#codeSelect option[data-value='selected']").attr('value', val);
            $("#codeSelect option[data-value='selected']").text(val);
            
            $("#codeSelect").val(val);
        });
    </script>
</body>
</html>
