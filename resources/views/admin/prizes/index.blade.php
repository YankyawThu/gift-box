@extends('admin.layouts.content')

@section('content-detail')
<div class="table-responsive">
    <table class="align-items-center mb-0 table">
        <thead>
            <tr>
                <th class="text-xxs font-weight-bolder opacity-7">NO.</th>
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
                        <p class="font-weight-bold mb-0 text-sm">{{ $loop->iteration }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->name }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->nickname }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->avatar ? getFileUrlFromAkoneyaMedia(optional($item->user)->avatar):'' }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->phone }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->gift_item_name }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->gift_item_image ? getFileUrlFromAkoneyaMedia($item->gift_item_image):'' }}</p>
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
                            <span class="badge badge-{{ $item->is_save == 1 ? 'success' : 'warning' }}">{{boolval($item->is_save) ? 'true' : 'false'}}</span>
                        </p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">
                            <span class="badge badge-{{ $item->is_collect == 1 ? 'success' : 'warning' }}">{{boolval($item->is_collect) ? 'true' : 'false'}}</span>
                        </p>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
