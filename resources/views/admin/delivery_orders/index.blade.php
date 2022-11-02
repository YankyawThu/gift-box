@extends('admin.layouts.content')

@push('css')
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
@endpush
@section('content-detail')
<div>
    <div class="d-flex justify-content-between content_detail_header">
        <div class="align-self-center">
            <form class="navbar-search navbar-search-light form-inline mr-sm-3"
                action="{{ route('admin.delivery-orders.index') }}">
                <div class="col-md-12 form-group mb-0">
                    <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                        <input class="form-control searching" placeholder="Search by User Name" type="text" name="name"
                            value="{{ request('name') }}">
                    </div>
                    <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                        <input class="form-control searching" placeholder="Search by Order Number" type="text"
                            name="order_number" value="{{ request('order_number') }}">
                    </div>
                    <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                        <input class="form-control searching" placeholder="Search by Address" type="text" name="address"
                            value="{{ request('address') }}">
                    </div>
                    <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                        <input class="form-control searching" placeholder="Search by Delivery Time" type="text"
                            name="delivery_time" value="{{ request('delivery_time') }}" autocomplete="off">
                    </div>
                    <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                        <input class="form-control searching" placeholder="Search by Receive Time" type="text"
                            name="receive_time" value="{{ request('receive_time') }}" autocomplete="off">
                    </div>
                    <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                        <select class="form-select form-control form-control-alternative" aria-label="Select paymethod"
                            name="status" id="status">
                            <option value="" @if (request('status')===null) selected @endif>Order Status
                            </option>
                            @foreach (config('config.deliveryStatus') as $v)
                            <option value="{{ $v }}" @if (request('status')==$v) selected @endif>
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
                <th class="text-xxs font-weight-bolder opacity-7">NO</th>
                <th class="text-xxs font-weight-bolder opacity-7">ORDER NO</th>
                <th class="text-xxs font-weight-bolder opacity-7">GIFT PRIZE ID</th>
                {{-- <th class="text-xxs font-weight-bolder opacity-7">GOODS NAME</th>
                <th class="text-xxs font-weight-bolder opacity-7">GOOD IMAGE</th>
                <th class="text-xxs font-weight-bolder opacity-7">NICKNAME</th> --}}
                <th class="text-xxs font-weight-bolder opacity-7">USERNAME</th>
                <th class="text-xxs font-weight-bolder opacity-7">MOBILE</th>
                <th class="text-xxs font-weight-bolder opacity-7">ADDRESS</th>
                <th class="text-xxs font-weight-bolder opacity-7">STAUS</th>
                <th class="text-xxs font-weight-bolder opacity-7">DELIVERY TIME</th>
                <th class="text-xxs font-weight-bolder opacity-7">RECEIVED TIME</th>
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
                    <p class="font-weight-bold mb-0 text-sm">{{ $item->order_number }}</p>
                </td>
                <td>
                    <p class="font-weight-bold mb-0 text-sm">{{ $item->gift_prize_id }}</p>
                </td>
                <td>
                    <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->name }}</p>
                </td>
                <td>
                    <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->phone }}</p>
                </td>
                <td>
                    <p class="font-weight-bold mb-0 text-sm">{{ optional($item->address)->address }}</p>
                </td>
                <td>
                    <p class="font-weight-bold mb-0 text-sm">
                        <span class="badge badge-{{ $item->statusBadge() }}">{{ $item->status }}</span>
                    </p>
                </td>
                <td class="align-middle">
                    <span class="font-weight-bold text-sm">
                        {{ $item->delivery_time ? $item->delivery_time->diffForHumans() : "-" }}</span>
                </td>
                <td class="align-middle">
                    <span class="font-weight-bold text-sm">
                        {{ $item->receive_time ? $item->receive_time->diffForHumans() : "-" }}</span>
                </td>
                <td class="align-middle">
                    <span class="font-weight-bold text-sm">{{ $item->created_at->diffForHumans() }}</span>
                </td>
                <td class="align-middle">
                    <a href="javascript:;" class="font-weight-bold px-1 text-sm" data-id="{{ $item->id }}"
                        data-goods-name="{{ $item->gift_prize_id }}" data-name={{ optional($item->user)->name }}
                        data-phone="{{ optional($item->user)->phone }}" data-address="{{
                        optional($item->address)->address}}"
                        data-toggle="modal" data-target="#edit-delivery-order-modal">
                        <span class="btn btn-sm btn-success" data-toggle="tooltip"
                            data-original-title="Edit Deliver Order"><i class="fas fa-edit"></i>
                        </span>
                    </a>

                    @include('admin.delivery_orders.edit', ['id' => $item->id, 'item' => $item, 'posts' => $posts])
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

@push('js')
<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<script type="text/javascript">
    $(function() {

        // deli time daterange
        $('input[name="delivery_time"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            format: 'DD/MM/YY',
            cancelLabel: 'Clear'
        }
        });

        $('input[name="delivery_time"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
        });

        $('input[name="delivery_time"]').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });

        // receive time daterange
        $('input[name="receive_time"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            format: 'DD/MM/YY',
            cancelLabel: 'Clear'
        }
        });

        $('input[name="receive_time"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
        });

        $('input[name="receive_time"]').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });

    });
</script>
@endpush
