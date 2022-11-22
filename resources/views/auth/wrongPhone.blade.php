@extends('auth.main')

@section('content')
<div class="w-96 m-auto">
    <div class="pt-12">
        <div class="border_grad2 before:rounded-xl w-10 h-10">
            <img src="{{asset('/image/ui/Back2.svg')}}" class="py-3 m-auto" alt="" onclick="window.history.back()">
        </div>
        <div class="text_c2 text-2xl font-bold py-2 mt-10">Change Phone Number</div>
        <form action="{{ route('changePhone') }}" method="POST">
            <div class="flex mt-10">
                <div class="border_grad1 flex-none before:rounded-3xl w-18 mr-2">
                    <select id="codeSelect" name="code" class="apperance-none focus:outline-none bg-transparent w-14 py-4 text_c1 mx-2">
                        @foreach (config('countryCodes') as $code)
                            <option value="{{ $code['dial_code'] }}">{{ $code['dial_code'] }} ({{ $code['name'] }})</option>
                        @endforeach
                    </select>
                </div>
                <div class="grow border_grad1 before:rounded-3xl">
                    <input class="w-full px-5 py-4 rounded-r-full focus:outline-none bg-transparent text_c1" placeholder="{{ __('Phone Number') }}" type="text" name="phone">
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