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
            <form class="navbar-search navbar-search-light form-inline mr-sm-3" action="{{route('admin.users.index')}}">
                <div class="form-group mb-0">
                    <div class="input-group input-group-alternative input-group-merge searching">
                        <input class="form-control searching" placeholder="Search by user name" type="text" name="name"
                            value="{{request('name')}}">
                    </div>
                    <div class="input-group input-group-alternative input-group-merge searching user-filter">
                        <input class="form-control searching" placeholder="Search by email" type="text" name="email"
                            value="{{request('email')}}">
                    </div>
                    <div class="input-group input-group-alternative input-group-merge searching user-filter">
                        <input class="form-control searching" placeholder="Search by money" type="text" name="money"
                            value="{{request('money')}}">
                    </div>
                    <div class="input-group input-group-alternative input-group-merge searching user-filter">
                        <input class="form-control searching" placeholder="Search by coin" type="text" name="coin"
                            value="{{request('coin')}}">
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
                    <th class="text-xxs font-weight-bolder opacity-7">PHONE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">MONEY</th>
                    <th class="text-xxs font-weight-bolder opacity-7">JOIN DATE</th>
                    <th class="opacity-7"></th>
                </tr>
            </thead>
            <tbody>
                @if($data)
                @foreach ($data as $key => $item)
                <tr>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{ $item->name }}</p>
                    </td>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{ $item->email }}</p>
                    </td>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{ $item->phone }}</p>
                    </td>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{ number_format($item->money, 2) }}</p>
                    </td>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{ $item->created_at->diffForHumans() }}</p>
                    </td>
                    <td class="align-middle">
                        <a href="javascript:;" class="font-weight-bold px-1 text-sm" data-id="{{ $item->id }}"
                            data-name="{{ $item->name }}" data-phone="{{ $item->phone }}" data-coin="{{ $item->coin }}"
                            data-money="{{ $item->money }}" data-toggle="modal" data-target="#edit-user-modal">
                            <span class="btn btn-sm btn-success" data-toggle="tooltip" data-original-title="Edit User">
                                <i class="fas fa-edit"></i>
                            </span>
                        </a>
                        <a href="javascript:;" class="font-weight-bold text-danger px-1 text-sm"
                            data-id="{{ $item->id }}" data-toggle="modal" data-target="#delete-modal">
                            <span class="btn btn-sm btn-danger" data-toggle="tooltip" data-original-title="Delete User">
                                <i class="fas fa-trash"></i>
                            </span>
                        </a>
                        @include('admin.users.edit', ['id' => $item->id, 'item' => $item])
                        @include('admin.layouts.delete', [
                        'route' => 'users.destroy',
                        'id' => $item->id,
                        'name' => 'Delete User',
                        ])
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
