@extends('auth.main')

@section('title', 'OTP')

@section('content')
<div class="w-96 m-auto">
    <div class="pt-12">
        <div class="border_grad2 before:rounded-xl w-10 h-10">
            <img src="{{asset('/image/ui/Back2.svg')}}" class="py-3 m-auto" alt="" onclick="window.history.back()">
        </div>
        <div class="text_c2 text-2xl font-bold py-2 mt-10">Change Phone Number</div>
        <form action="{{ route('changePhone') }}" method="POST">
            <div class="border_grad1 before:rounded-3xl flex mt-10">
                <div class="flex-none self-center ml-3 w-10">
                    <img src="{{ asset('image/ui/Phone.svg') }}" alt="">
                </div>
                <div class="grow flex w-full">
                    <div class="w-10 ml-2 text-gray-500 self-center">09 -</div>
                    <div class="grow">
                        <input class="w-full pr-7 py-4 rounded-r-full focus:outline-none bg-transparent text_c1" placeholder="{{ __('Phone Number') }}" type="number" name="phone" required>
                    </div>
                </div>
            </div>
            @if ($errors->has('phone'))
                <div class="text-center py-2">
                    <strong class="text-red-500 text-xs">{{ $errors->first('phone') }}</strong>
                </div>
            @endif
            @if ($errors->has('alreadyUser'))
                <div class="text-center py-2">
                    <strong class="text-red-500 text-xs">{{ $errors->first('alreadyUser') }}</strong>
                </div>
            @endif
            <button type="submit" class="cursor-pointer w-full py-4 btn_gradient text-center rounded-full text-white mt-10">{{ __('Confirm') }}</button>
        </form>
    </div>
</div>
@endsection