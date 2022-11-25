@extends('auth.main')

@section('title', 'Forget Password')

@section('content')
<div class="w-96 m-auto">
    <div class="pt-12">
        <div class="border_grad2 before:rounded-xl w-10 h-10">
            <img src="{{asset('/image/ui/Back2.svg')}}" class="py-3 m-auto" alt="" onclick="window.history.back()">
        </div>
        <div class="text_c2 text-2xl font-bold py-2 mt-10">Forget Password ?</div>
        <div class="text-white py-2">Don't worry! It occurs. Please enter the phone number linked with your account.</div>
        <form role="form" method="POST" action="{{ route('password.email') }}">
            @csrf
            <div class="flex w-full mt-14">
                <div class="border_grad1 flex-none before:rounded-3xl w-18 mr-2">
                    <select id="codeSelect" name="code" class="apperance-none focus:outline-none bg-transparent w-14 py-4 text_c1 mx-2">
                        @foreach (config('countryCodes') as $code)
                            <option value="{{ $code['dial_code'] }}">{{ $code['dial_code'] }} ({{ $code['name'] }})</option>
                        @endforeach
                    </select>
                </div>
                <div class="grow border_grad1 before:rounded-3xl">
                    <input class="w-full px-5 py-4 rounded-r-full focus:outline-none bg-transparent text_c1" placeholder="{{ __('Phone Number') }}" type="text" name="phone" required>
                </div>
            </div>
            @if ($errors->has('alreadyUser'))
                <div class="text-center py-2 text-xs">
                    <strong class="text-red-500">{{ $errors->first('alreadyUser') }}</strong>
                </div>
            @endif
            <div class="py-5 mt-14">
                <div class="cursor-pointer w-full py-4 btn_gradient text-center rounded-full text-white" onclick="verify()">{{ __('Send Code') }}</div>
                <div class="text-center py-5"><span class="text_c3 mr-2 text-white">Remember Password ?</span><a href="{{ route('login') }}" class="text_c2">Login</a></div>
            </div>
        </form>
    </div>
</div>
@endsection