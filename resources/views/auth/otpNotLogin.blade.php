@extends('auth.main')

@section('title', 'OTP')

@section('content')
<div class="w-96 m-auto">
    <div class="pt-12">
        <div class="border_grad2 before:rounded-xl w-10 h-10">
            <img src="{{asset('/image/ui/Back2.svg')}}" class="py-3 m-auto" alt="" onclick="window.history.back()">
        </div>
        <div class="text_c2 text-2xl font-bold py-2 mt-10">OTP Verification</div>
        <div class="text-white py-2">Enter the verification code we just sent on your <span class="text_c2">{{$user->phone}}</span>.</div>
        <form action="{{ route('password.reset', ['token' => $token]) }}" method="GET" id="verifyOTP">
            @csrf
            <input type="text" name="phone" value="{{ $user->phone }}" hidden>
            <div class="flex justify-center mt-14">
                <div class="border_grad2 before:rounded-2xl mx-1">
                    <input class="bg-transparent text_c2 otp_text w-14 text-center p-2 focus:outline-none" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength=1 >
                </div>
                <div class="border_grad2 before:rounded-2xl mx-1">
                    <input class="bg-transparent text_c2 otp_text w-14 text-center p-2 focus:outline-none" type="text" oninput='digitValidate(this)' onkeyup='tabChange(2)' maxlength=1 >
                </div>
                <div class="border_grad2 before:rounded-2xl mx-1">
                    <input class="bg-transparent text_c2 otp_text w-14 text-center p-2 focus:outline-none" type="text" oninput='digitValidate(this)' onkeyup='tabChange(3)' maxlength=1 >
                </div>
                <div class="border_grad2 before:rounded-2xl mx-1">
                    <input class="bg-transparent text_c2 otp_text w-14 text-center p-2 focus:outline-none" type="text" oninput='digitValidate(this)' onkeyup='tabChange(4)' maxlength=1 >
                </div>
                <div class="border_grad2 before:rounded-2xl mx-1">
                    <input class="bg-transparent text_c2 otp_text w-14 text-center p-2 focus:outline-none" type="text" oninput='digitValidate(this)' onkeyup='tabChange(5)' maxlength=1 >
                </div>
                <div class="border_grad2 before:rounded-2xl mx-1">
                    <input class="bg-transparent text_c2 otp_text w-14 text-center p-2 focus:outline-none" type="text" oninput='digitValidate(this)' onkeyup='tabChange(6)' maxlength=1 >
                </div>
            </div>
            <div id="incorrectOTP" class="hidden text-center mt-4 text-sm" style="color: #EC008C;">Incorrect OTP</div>
            <div id="errorOTP" class="hidden text-center mt-4 text-sm" style="color: #EC008C;">Error OTP Request</div>
            <div class="py-5 mt-14">
                <div class="cursor-pointer w-full py-4 btn_gradient text-center rounded-full text-white" onclick="verify()">{{ __('Verify') }}</div>
                <div class="text-center py-3"><span id="otpExpire" style="color: #EC008C;">60</span><span class="text-white"> sec</span></div>
            </div>
        </form>
    </div>
    <div id="recaptcha-container"></div>
</div>
<div class="w-96">
    <div class="absolute bottom-5 inset-x-5 text-center -z-10">
        <span class="text_c3 mr-2 text-white">Dont receive code?</span><button class="text_c2" onclick="sendOTP()">Resend</button>
    </div>
</div>
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
    }
    firebase.initializeApp(firebaseConfig)
</script>
<script type="text/javascript">
    window.onload = function () {
        render()
        sendOTP()
    }
    var code = ''
    var seconds = 60
    var timer
    let digitValidate = function(ele){
        ele.value = ele.value.replace(/[^0-9]/g,'')
        code += ele.value
    }

    let tabChange = function(val){
        let ele = document.querySelectorAll('input')
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
    function render() {
        // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved
                onSignInSubmit()
            }
        })
        recaptchaVerifier.render()
    }
    function sendOTP() {
        seconds = 60
        var number = {!! json_encode($user->phone) !!}
        firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
            window.confirmationResult = confirmationResult
            coderesult = confirmationResult
            if(!timer) {
                timer = window.setInterval(function() {
                    countExp()
                }, 1000)
            }
        }).catch(function (error) {
            document.getElementById('errorOTP').style.display = 'block'
            console.log('error OTP request')
        })
    }
    function countExp() {
        if(seconds < 60) {
            document.getElementById("otpExpire").innerHTML = seconds
        }
        if (seconds > 0 ) {
            seconds--
        } else {
            clearInterval(timer)
        }
    }
    function verify() {
        document.getElementById('verifyOTP').submit()
        if(typeof coderesult !== 'undefined') {
            coderesult.confirm(code).then(function (result) {
                var user = result.user
            }).catch(function (error) {
                document.getElementById('incorrectOTP').style.display = 'block'
                console.log('error OTP verify')
            })
        }
        else {
            document.getElementById('incorrectOTP').style.display = 'block'
        }
    }
</script>
@endsection