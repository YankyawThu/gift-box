@extends('admin.layouts.content')
@push('css')
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
@endpush
@section('content-detail')
    <div>
        <div class="d-flex justify-content-between content_detail_header">
            <div class="align-self-center">
                <form class="navbar-search navbar-search-light form-inline mr-sm-3" action="{{ route('admin.prize.index') }}">
                    <div class="col form-group mb-0">
                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <input class="form-control searching" placeholder="Search by ID" type="text" name="id"
                                value="{{ request('id') }}">
                        </div>
                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <input class="form-control searching" placeholder="Search by Order No." type="text"
                                name="out_trade_no" value="{{ request('out_trade_no') }}">
                        </div>
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
                            <input class="form-control searching" placeholder="Search by Gift Item Name" type="text"
                                name="gift_item_name" value="{{ request('gift_item_name') }}">
                        </div>
                        <div
                            class="col-lg-3 col-xl-2 col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                            <select class="form-select form-control form-control-alternative" aria-label="Select Status"
                                name="status">
                                <option value="" @if (request('status') === null) selected @endif>Select Status
                                </option>
                                @foreach (config('config.prizeStatus') as $k => $v)
                                    <option value="{{ $v }}" @if (request('status') == $v) selected @endif>
                                        {{ $v }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                            <input class="form-control searching" placeholder="Search by Exchange Time" type="text"
                                name="exchange_time" value="{{ request('exchange_time') }}" autocomplete="off">
                        </div>
                        <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                            <input class="form-control searching" placeholder="Search by Delivery Time" type="text"
                                name="delivery_time" value="{{ request('delivery_time') }}" autocomplete="off">
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
                    <th class="text-xxs font-weight-bolder opacity-7">ID.</th>
                    <th class="text-xxs font-weight-bolder opacity-7">ORDER NO.</th>
                    <th class="text-xxs font-weight-bolder opacity-7">USER NAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">NICKNAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">AVATAR</th>
                    <th class="text-xxs font-weight-bolder opacity-7">MOBILE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">GIFT ITEM NAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">GIFT ITEM IMAGE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">GIFT ITEM BUY PRICE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">GIFT ITEM SELL PRICE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">STAUS</th>
                    <th class="text-xxs font-weight-bolder opacity-7">EXCHANGE TIME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">DELIVERY TIME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">DELIVERY FEE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">IS SELL</th>
                    <th class="text-xxs font-weight-bolder opacity-7">IS COLLECT</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($prize as $key => $item)
                    <tr>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->id }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->out_trade_no }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->name }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->nickname }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">
                                {{ optional($item->user)->avatar ? getFileUrlFromAkoneyaMedia(optional($item->user)->avatar) : '' }}
                            </p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->phone }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->gift_item_name }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">
                                {{ $item->gift_item_image ? getFileUrlFromAkoneyaMedia($item->gift_item_image) : '' }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->gift_item_buy_price }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->gift_item_sell_price }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">
                                <span class="badge badge-{{ $item->statusBadge() }}">{{ $item->status }}</span>
                            </p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->exchange_time }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->delivery_time }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->delivery_fee }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">
                                <span
                                    class="badge badge-{{ $item->is_save == 1 ? 'success' : 'warning' }}">{{ boolval($item->is_save) ? 'true' : 'false' }}</span>
                            </p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">
                                <span
                                    class="badge badge-{{ $item->is_collect == 1 ? 'success' : 'warning' }}">{{ boolval($item->is_collect) ? 'true' : 'false' }}</span>
                            </p>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection

@section('content-pagination')
    {{ $prize }}
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
                $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format(
                    'DD/MM/YYYY'));
            });

            $('input[name="delivery_time"]').on('cancel.daterangepicker', function(ev, picker) {
                $(this).val('');
            });

            // receive time daterange
            $('input[name="exchange_time"]').daterangepicker({
                autoUpdateInput: false,
                locale: {
                    format: 'DD/MM/YY',
                    cancelLabel: 'Clear'
                }
            });

            $('input[name="exchange_time"]').on('apply.daterangepicker', function(ev, picker) {
                $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format(
                    'DD/MM/YYYY'));
            });

            $('input[name="exchange_time"]').on('cancel.daterangepicker', function(ev, picker) {
                $(this).val('');
            });

        });
    </script>
@endpush
