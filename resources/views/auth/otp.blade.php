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
            {{-- @if ($msg)
                <div class="p-3 border_grad2_show bg_grad1 text-red-500 before:rounded-xl rounded-xl my-2">
                    {{$msg}}
                </div>    
            @endif --}}
            <div class="text-white py-2">Enter the verification code we just sent on your {{$phone}}.</div>
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
            <div id="recaptcha-container"></div>
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
    <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>
    <script>
        var firebaseConfig = {
            apiKey: "AIzaSyCCVHs_gTNZe46_onskxLczo8pHnPKQYjM",
            authDomain: "blind-box-820f4.firebaseapp.com",
            projectId: "blind-box-820f4",
            storageBucket: "blind-box-820f4.appspot.com",
            messagingSenderId: "568496174344",
            appId: "1:568496174344:web:ad516335f03eb5197228bd",
            measurementId: "G-RLJKH0QHC3"
        };
        firebase.initializeApp(firebaseConfig);
    </script>
    <script type="text/javascript">
        window.onload = function () {
            render();
            sendOTP()
        };
        function render() {
            // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    onSignInSubmit();
                }
            })
            recaptchaVerifier.render();
        }
        function sendOTP() {
            number = {!! json_encode(auth()->user()->phone) !!}
            firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
                window.confirmationResult = confirmationResult;
                coderesult = confirmationResult;
                console.log(coderesult);
            }).catch(function (error) {
                console.log(error)
            });
        }
        function verify() {
            // var code = $("#verification").val();
            // coderesult.confirm(code).then(function (result) {
            //     var user = result.user;
            //     console.log(user);
            //     $("#successOtpAuth").text("Auth is successful");
            //     $("#successOtpAuth").show();
            // }).catch(function (error) {
            //     $("#error").text(error.message);
            //     $("#error").show();
            // });
        }
    </script>
</body>
</html>