@extends('admin.layouts.content')

@section('content-detail')
    <div>
        <div class="d-flex justify-content-between content_detail_header">
            <div class="align-self-center">
                <form class="navbar-search navbar-search-light form-inline mr-sm-3"
                    action="{{ route('admin.recharge-orders.index') }}">
                    <div class="col form-group mb-0">
                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <input class="form-control searching" placeholder="Search by User Name" type="text"
                                name="name" value="{{ request('name') }}">
                        </div>
                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <input class="form-control searching" placeholder="Search by Coin Amount" type="text"
                                name="amount" value="{{ request('amount') }}">
                        </div>

                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <input class="form-control searching" placeholder="Search by Out Trade No." type="text"
                                name="out_trade_no" value="{{ request('out_trade_no') }}">
                        </div>
                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <select class="form-select form-control form-control-alternative" aria-label="Select paymethod"
                                name="pay_method" id="pay_method">
                                <option value="" @if (request('pay_method') === null) selected @endif>Select Pay Method
                                </option>
                                @foreach (config('config.payMethod') as $k => $v)
                                    <option value="{{ $v['id'] }}" @if (request('pay_method') == $v['id']) selected @endif>
                                        {{ $v['name'] }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <select class="form-select form-control form-control-alternative" aria-label="Select paymethod"
                                name="status" id="status">
                                <option value="" @if (request('status') === null) selected @endif>Pay Status
                                </option>
                                @foreach (config('config.payStatus') as $k => $v)
                                    <option value="{{ $k }}" @if (request('status') == $k) selected @endif>
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
                    <th class="text-xxs font-weight-bolder opacity-7">No</th>
                    <th class="text-xxs font-weight-bolder opacity-7">USER NAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">AMOUNT</th>
                    <th class="text-xxs font-weight-bolder opacity-7">PAY METHOD</th>
                    <th class="text-xxs font-weight-bolder opacity-7">OUT TRADE NO.</th>
                    <th class="text-xxs font-weight-bolder opacity-7">PAY TIME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">STATUS</th>
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
                            <p class="font-weight-bold mb-0 text-sm">{{ number_format($item->amount, 2) }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->pay_method ? config('config.rechargePayMethod.'.$item->pay_method) : '-' }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->out_trade_number }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->pay_time ? $item->pay_time : '-' }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">
                                <span
                                    class="badge badge-{{ $item->status == 'paid' ? 'success' : 'warning' }}">{{ $item->status }}</span>
                            </p>
                        </td>
                        <td class="align-middle">
                            <span class="font-weight-bold text-sm">{{ $item->created_at }}</span>
                        </td>
                        <td class="align-middle">


                            <a href="javascript:;" class="font-weight-bold px-1 text-sm" data-id="{{ $item->id }}"

                                data-image="{{$item->voucher}}"
                                data-image-path={{getFileUrlFromAkoneyaMedia($item->voucher)}}
                                data-toggle="modal"
                                data-target="#recharge-order-paid">
                                <span class="btn btn-sm btn-success" data-toggle="tooltip"
                                    data-original-title="Confirm Payment"><i class="fas fa-edit"></i>
                                </span>
                            </a>
                            @include('admin.recharge_orders.confirm', [
                                'id' => $item->id,
                                'item' => $item,
                                ])


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
