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
                action="{{route('admin.giftLog.index')}}">
                <div class="form-group mb-0">
                    <div class="input-group input-group-alternative input-group-merge searching">
                        <input class="form-control searching" placeholder="Search by user name" type="text"
                            name="user_name" value="{{request('user_name')}}">
                    </div>
                    <div class="input-group input-group-alternative input-group-merge searching gift-log-filter">
                        <input class="form-control searching" placeholder="Search by gift box" type="text"
                            name="gift_box" value="{{request('gift_box')}}">
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
                    <th class="text-xxs font-weight-bolder opacity-7">USER</th>
                    <th class="text-xxs font-weight-bolder opacity-7">GIFT BOX</th>
                    <th class="text-xxs font-weight-bolder opacity-7">CREATED</th>
                    <th class="opacity-7"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $key => $item)
                <tr>
                    <td>
                        <p class="text-sm font-weight-bold mb-0">{{optional($item->user)->name}}</p>
                    </td>

                    <td>
                        <p class="text-sm font-weight-bold mb-0">
                            {{optional($item->giftBox)->name}}</p>
                    </td>

                    <td>
                        <span class="text-sm font-weight-bold">{{$item->created_at}}</span>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection

@section('content-pagination')
{{ $data->appends($_GET)->links() }}
@endsection
