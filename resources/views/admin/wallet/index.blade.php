@extends('admin.layouts.content')
@section('content-detail')
<script>
    $(function() {
        @if (session('status'))
                        toastr.success('{{ session('status') }}')
        @endif

        @if ($errors->any())
                        toastr.error('{{ $errors->all()[0] }}')
        @endif
    })
</script>
    <div>
        <div class="d-flex justify-content-between content_detail_header">
            <div class="align-self-center">
                <form class="navbar-search navbar-search-light form-inline mr-sm-3" action="{{ route('admin.wallet.index') }}">
                    <div class="col form-group mb-0">

                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <input class="form-control searching" placeholder="Search by User Name" type="text"
                                name="name" value="{{ request('name') }}">
                        </div>
                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <input class="form-control searching" placeholder="Search by Nickname" type="text"
                                name="nickname" value="{{ request('nickname') }}">
                        </div>
                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <input class="form-control searching" placeholder="Search by Mobile" type="text"
                                name="mobile" value="{{ request('mobile') }}">
                        </div>
                        <div
                        class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                        <input class="form-control searching" placeholder="Search by Amount" type="text"
                            name="amount" value="{{ request('amount') }}">
                        </div>
                        <div
                        class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <select class="form-select form-control form-control-alternative" aria-label="Select Status"
                                name="status" id="status">
                                <option value="" @if (request('status') === null) selected @endif>Status
                                </option>
                                @foreach (config('config.withdrawStatus') as $k => $v)
                                    <option value="{{ $v }}" @if (request('status') == $v) selected @endif>
                                        {{ $v }}
                                    </option>
                                @endforeach
                            </select>
                         </div>

                        <div class="input-group-prepend">
                            <button class="btn input-group-text gift-log-search-btn" type="submit">
                                <i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>

    <div class="table-responsive">
        <table class="align-items-center mb-0 table">
            <thead>
                <tr>
                    <th class="text-xxs font-weight-bolder opacity-7">NO.</th>
                    <th class="text-xxs font-weight-bolder opacity-7">USER NAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">NICKNAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">MOBILE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">WITHDRAW MONEY</th>
                    <th class="text-xxs font-weight-bolder opacity-7">STAUS</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $key => $item)
                    <tr>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $data->firstItem() + $key}}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{optional($item->user)->name}}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{optional($item->user)->nickname}}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{optional($item->user)->phone}}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{$item->money}}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">
                                <span
                                    class="badge badge-{{ $item->status == 'approved' ? 'success' : 'warning' }}">{{ $item->status }}</span>
                            </p>
                        </td>
                        <td class="align-middle">
                            @if ($item->status=='pending')
                                <a href="javascript:;" class="font-weight-bold px-1 text-sm" data-id="{{ $item->id }}"
                                    data-toggle="modal"
                                    data-target="#wallet-approved">
                                    <span class="btn btn-sm btn-success"   data-toggle="tooltip"
                                        data-original-title="Confirm Withdraw"><i class="ni ni-check-bold"></i>
                                    </span>
                                </a>
                            @endif
                            @include('admin.wallet.confirm')

                        </td>

                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection

@section('content-pagination')
    {{ $data->appends($_GET)->links() }}
@endsection

