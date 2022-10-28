@extends('admin.layouts.content')
@section('content-detail')
<script>
    $(function() {
        @if (session('status'))
            toastr.success('{{ session('status') }}')
        @endif
    })
</script>
<div>
    <div class="d-flex justify-content-between content_detail_header">
        <div class="align-self-center">
            <form class="navbar-search navbar-search-light form-inline mr-sm-3"
                action="{{route('admin.admins.index')}}">
                <div class="form-group mb-0">
                    <div class="input-group input-group-alternative input-group-merge searching">
                        <input class="form-control searching" placeholder="Search by user name" type="text"
                            name="username" value="{{request('username')}}">
                    </div>
                    <div class="input-group input-group-alternative input-group-merge searching user-filter">
                        <input class="form-control searching" placeholder="Search by email" type="text" name="email"
                            value="{{request('email')}}">
                    </div>
                    <div class="input-group input-group-alternative input-group-merge searching user-filter">
                        <input class="form-control searching" placeholder="Search by nickname" type="text"
                            name="nickname" value="{{request('nickname')}}">
                    </div>
                    <div class="gift-log-filter">
                        <button class="input-group-text gift-log-search-btn" type="submit"><i
                                class="fas fa-search gift-log-search"></i></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table align-items-center mb-0">
            <thead>
                <tr>
                    <th class="text-xxs font-weight-bolder opacity-7">NAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">EMAIL</th>
                    <th class="text-xxs font-weight-bolder opacity-7">NICKNAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">STATUS</th>
                    <th class="text-xxs font-weight-bolder opacity-7">LAST LOGIN</th>
                </tr>
            </thead>
            <tbody>
                @if($data)
                @foreach ($data as $key => $item)
                <tr>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{$item->username}}</p>
                    </td>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{$item->email}}</p>
                    </td>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{$item->nickname}}</p>
                    </td>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{($item->status ? 'Active' : 'In-Active')}}</p>
                    </td>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{($item->logintime ? $item->logintime->diffForHumans()
                            : '')}}</p>
                    </td>
                </tr>
                @endforeach
                @endif
            </tbody>
        </table>
    </div>
</div>
@endsection
@section('content-pagination')
{{$data}}
@endsection
