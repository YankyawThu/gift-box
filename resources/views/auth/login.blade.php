@extends('auth.main')

@section('content')
<img src="{{ asset('/image/ui/Login.svg') }}" alt="" class="m-auto">
<div class="text_c2 text-center text-2xl font-semibold mb-6">Login</div>
<div class="w-96 m-auto">
    <form role="form" method="POST" action="{{ route('login') }}">
        @csrf
        <div class="mb-3">
            <div class="flex w-full">
                <div class="border_grad1 flex before:rounded-3xl w-18 mr-2">
                    <select id="codeSelect" name="code" class="apperance-none focus:outline-none bg-transparent w-14 text_c1 mx-2">
                        @foreach (config('countryCodes') as $code)
                            <option value="{{ $code['dial_code'] }}">{{ $code['dial_code'] }} ({{ $code['name'] }})</option>
                        @endforeach
                    </select>
                </div>
                <div class="grow flex-none border_grad1 before:rounded-3xl">
                    <input class="w-full px-5 py-4 rounded-r-full focus:outline-none bg-transparent text_c1" placeholder="{{ __('Phone Number') }}" type="text" name="phone" required>
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
                    <input class="w-full pl-3 pr-7 py-4 rounded-r-full focus:outline-none bg-transparent text_c1" name="password" placeholder="{{ __('Password') }}" type="password" required>
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
                {{-- @if (Route::has('password.request'))
                <a href="{{ route('password.request') }}" class="text_c2">
                <a href="#" class="text_c2">
                    <small>{{ __('Forgot password?') }}</small>
                </a>
                @endif --}}
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
@endsection