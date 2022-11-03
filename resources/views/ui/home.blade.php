<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    This is UI
    <form action="{{ route('change-avatar') }}"  method="POST" enctype="multipart/form-data">
        @csrf
        <input type="file" name="avatar">
        <input type="submit" value="Upload Image" name="submit">
    </form>


    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
    </form>
    <a href="{{ route('logout') }}" class="dropdown-item"
        onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
        <i class="ni ni-user-run"></i>
        <span>{{ __('Logout') }}</span>
    </a>
</body>

</html>
