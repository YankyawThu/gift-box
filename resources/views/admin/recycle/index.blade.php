@extends('admin.layouts.content')

@section('content-detail')

<div class="table-responsive">
    <table class="align-items-center mb-0 table">
        <thead>
            <tr>
                <th class="text-xxs font-weight-bolder opacity-7">No</th>
                <th class="text-xxs font-weight-bolder opacity-7">USER NAME</th>
                <th class="text-xxs font-weight-bolder opacity-7">GOOD NAME</th>
                <th class="text-xxs font-weight-bolder opacity-7">STATUS</th>
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
                    <p class="font-weight-bold mb-0 text-sm">{{ $item->gift_item_name }}</p>
                </td>
                <td>
                    <p class="font-weight-bold mb-0 text-sm">
                        <span class="badge badge-{{ $item->status == 1 ? 'success' : 'warning' }}">{{ config('enums.recycleStatus.'.$item->status)
                            }}</span>
                    </p>
                </td>

                <td></td>

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
