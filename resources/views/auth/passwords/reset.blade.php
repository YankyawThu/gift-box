@extends('auth.main')

@section('title', 'Forget Password')

@section('content')
<div class="w-96 m-auto">
    <div class="pt-12">
        <div class="border_grad2 before:rounded-xl w-10 h-10">
            <img src="{{asset('/image/ui/Back2.svg')}}" class="py-3 m-auto" alt="" onclick="window.history.back()">
        </div>
        <div>
            <div class="text_c2 text-2xl mt-10 mb-3">
                {{__('Create New Password')}}
            </div>
            <div class="text-white text-sm my-5">
                {{__('Your password must be strong and can\'t guess it easily')}}.
            </div>
        </div>
        <form action="{{ route('password.update') }}" method="POST">
            <div>
                <div class="mb-5">
                    <div class="py-2">
                        <label for="" class="text_c1">{{__('New Password')}}</label>
                    </div>
                    <div class="border_grad2 before:rounded-xl">
                        <input type="password" name="newPassword" class="p-4 w-full bg-transparent text-white focus:outline-none" :placeholder="__('Enter New Password')">
                    </div>
                    @if ($errors->has('newPassword'))
                        <div class="text-center">
                            <strong class="text-red-500 text-xs">{{ $errors->first('newPassword') }}</strong>
                        </div>
                    @endif
                </div>
                <div class="mb-5">
                    <div class="py-2">
                        <label for="" class="text_c1">{{__('Confirm Password')}}</label>
                    </div>
                    <div class="border_grad2 before:rounded-xl">
                        <input type="password" name="confirmNewPassword" class="p-4 w-full bg-transparent text-white focus:outline-none" :placeholder="__('Enter Confirm Password')">
                    </div>
                    @if ($errors->has('confirmNewPassword'))
                        <div class="text-center">
                            <strong class="text-red-500 text-xs">{{ $errors->first('confirmNewPassword') }}</strong>
                        </div>
                    @endif
                </div>
            </div>
            <div class="py-10">
                <button type="submit" class="w-full py-4 btn_gradient text-center rounded-full text-white">{{__('Reset Password')}}</button>
            </div>
        </form>
    </div>
</div>
@endsection