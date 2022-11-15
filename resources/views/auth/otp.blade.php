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
    <title>Otp verify</title>
</head>
<body>
    <img src="{{ asset('/image/ui/Cloudy.svg') }}" class="absolute right-0" style="z-index: -9999;">
    <div class="h-screen w-96 m-auto">
        <div class="pt-12">
            <div class="border_grad2 before:rounded-xl w-10 h-10">
                <img src="{{asset('/image/ui/Back2.svg')}}" class="py-3 m-auto" alt="" onclick="window.history.back()">
            </div>
            <div class="text_c2 text-2xl font-bold py-2 mt-10">OTP Verification</div>
            @if ($msg)
                <div class="p-3 border_grad2_show bg_grad1 text-red-500 before:rounded-xl rounded-xl my-2">
                    {{$msg}}
                </div>    
            @endif
            <div class="text-white py-2">Enter the verification code we just sent on your phone number.</div>
            <div class="flex justify-center my-14">
                <div class="border_grad2 before:rounded-2xl mx-2">
                    <input class="bg-transparent text_c2 otp_text w-14 text-center p-2 focus:outline-none" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength=1 >
                </div>
                <div class="border_grad2 before:rounded-2xl mx-2">
                    <input class="bg-transparent text_c2 otp_text w-14 text-center p-2 focus:outline-none" type="text" oninput='digitValidate(this)' onkeyup='tabChange(2)' maxlength=1 >
                </div>
                <div class="border_grad2 before:rounded-2xl mx-2">
                    <input class="bg-transparent text_c2 otp_text w-14 text-center p-2 focus:outline-none" type="text" oninput='digitValidate(this)' onkeyup='tabChange(3)' maxlength=1 >
                </div>
                <div class="border_grad2 before:rounded-2xl mx-2">
                    <input class="bg-transparent text_c2 otp_text w-14 text-center p-2 focus:outline-none" type="text" oninput='digitValidate(this)' onkeyup='tabChange(4)' maxlength=1 >
                </div>
            </div>
            <div class="p-5">
                <button type="submit" class="w-full py-4 btn_gradient text-center rounded-full text-white">{{ __('Verify') }}</button>
            </div>
        </div>
    </div>
    <div class="w-96">
        <div class="absolute bottom-16 inset-x-5 text-center">
            <span class="text_c3 mr-2 text-white">Dont receive code?</span><a href="" class="text_c2">Resend</a>
        </div>
    </div>
    <script>
        let digitValidate = function(ele){
            ele.value = ele.value.replace(/[^0-9]/g,'');
        }

        let tabChange = function(val){
            let ele = document.querySelectorAll('input');
            if(ele[val-1].value != ''){
                if(val != ele.length) {
                    ele[val].focus()
                }
            }else if(ele[val-1].value == ''){
                if(val-1 != 0) {
                    ele[val-2].focus()
                }
            }   
        }
    </script>
</body>
</html>