@extends('admin.layouts.content')

@section('content-detail')
<div>
    <div class="d-flex justify-content-between content_detail_header">
        <div class="align-self-center">
            <form class="navbar-search navbar-search-light form-inline mr-sm-3"
                action="{{ route('admin.rechargeLists.index') }}">
                <div class="form-group mb-0">
                    <div class="input-group input-group-alternative input-group-merge searching">
                        <input class="form-control searching" placeholder="Search by Amount" type="number" name="amount"
                            value="{{ request('amount') }}">
                        <div class="input-group-prepend">
                            <button class="btn input-group-text" type="submit"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>

    <div class="table-responsive">
        <table class="align-items-center mb-0 table">
            <thead>
                <tr>
                    <th class="text-xxs font-weight-bolder opacity-7">No</th>
                    <th class="text-xxs font-weight-bolder opacity-7">USER NICKNAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">COIN AMOUNT</th>
                    <th class="text-xxs font-weight-bolder opacity-7">RMB AMOUNT</th>
                    <th class="text-xxs font-weight-bolder opacity-7">PAY METHOD</th>
                    <th class="text-xxs font-weight-bolder opacity-7">PAY RMB</th>
                    <th class="text-xxs font-weight-bolder opacity-7">OUT TRADE NO</th>
                    <th class="text-xxs font-weight-bolder opacity-7">PAY TIME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">STAUS</th>
                    <th class="text-xxs font-weight-bolder opacity-7">CREATED TIME</th>
                    <th class="opacity-7"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $key => $item)
                <tr>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $loop->iteration }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->name }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ number_format($item->coin_amount, 2) }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ number_format($item->rmb_amount, 2) }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->pay_method ? $item->pay_method : '-' }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->pay_rmb }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->out_trade_number }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->pay_time? $item->pay_time : '-' }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->status }}</p>
                    </td>
                    <td class="align-middle">
                        <span class="font-weight-bold text-sm">{{ $item->created_at->diffForHumans() }}</span>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection

@section('content-pagination')
{{ $data }}
@endsection
