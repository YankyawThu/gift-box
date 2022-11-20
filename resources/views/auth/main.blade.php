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
    <title>Blind Box</title>
</head>
<body>
    <img src="{{ asset('/image/ui/Cloudy.svg') }}" class="absolute right-0" style="z-index: -9999;">
    <div class="h-screen">
        @yield('content')
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