@extends('admin.layouts.content')

@section('content-detail')
    <div class="d-flex justify-content-between content_detail_header">
        <div class="align-self-center">
            <form class="navbar-search navbar-search-light form-inline mr-sm-3"
                action="{{ route('admin.recycle-orders.index') }}">
                <div class="col-md-12 form-group mb-0">
                    <div class="col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                        <input class="form-control searching" placeholder="Search by User Name" type="text" name="name"
                            value="{{ request('name') }}">
                    </div>
                    <div class="col-md-4 input-group input-group-alternative input-group-merge searching m-1">
                        <input class="form-control searching" placeholder="Search by Gift Item Name" type="text"
                            name="gift_item_name" value="{{ request('gift_item_name') }}">
                    </div>

                    <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                        <select class="form-select form-control form-control-alternative" aria-label="Select paymethod"
                            name="status" id="status">
                            <option value="" @if (request('status') === null) selected @endif>Order Status
                            </option>
                            <option value="Approved" @if(request('status')=='Approved') selected @endif>Approved</option>
                            <option value="Pending" @if(request('status')=='Pending') selected @endif>Pending</option>
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

    <div class="table-responsive">
        <table class="align-items-center mb-0 table">
            <thead>
                <tr>
                    <th class="text-xxs font-weight-bolder opacity-7">NO.</th>
                    <th class="text-xxs font-weight-bolder opacity-7">OUT TRADE NO.</th>
                    <th class="text-xxs font-weight-bolder opacity-7">USER NAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">GOOD NAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">PRICE</th>
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
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->out_trade_no }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ optional($item->user)->name }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->gift_item_name }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">{{ $item->price }}</p>
                        </td>
                        <td>
                            <p class="font-weight-bold mb-0 text-sm">
                                <span
                                    class="badge badge-{{ $item->status == 1 ? 'success' : 'warning' }}">{{ config('enums.recycleStatus.' . $item->status) }}</span>
                            </p>
                        </td>

                        {{-- <td>
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn badge badge-{{ $item->status == 1 ? 'success' : 'warning' }}">
                                    <input type="radio" name="status" class="togBtn" value="1" autocomplete="off"
                                        data-id="{{ $item->id }}" @if ($item->status == 1) disabled @endif>
                                    @if ($item->status == 1)
                                        Approved
                                    @else
                                        Pending
                                    @endif
                                </label>

                            </div>

                        </td> --}}
                        <td>
                            @if ($item->status == 0)
                                <a href="javascript:;" class="font-weight-bold px-1 text-sm" data-id="{{ $item->id }}"
                                    data-toggle="modal"
                                    data-target="#recycle-modal">
                                    <span class="btn btn-sm btn-success" data-toggle="tooltip"
                                        data-original-title="Confirm Order"><i class="ni ni-check-bold"></i>Confirm
                                    </span>
                                </a>
                                @include('admin.recycle.confirm', [
                                    'id' => $item->id,
                                    ])
                            @endif


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
    <script>
        $(function() {
            $(".togBtn").on('change', function(e) {
                var status = $(this).val();
                var id = $(this).data('id');
                var url = "{{ route('admin.recycle-orders.update', '') }}" + "/" + id;
                $.ajax({
                    type: "PUT",
                    dataType: "json",
                    url: url,
                    data: {
                        'status': status,
                    },
                    success: function(data) {
                        if (data.success) {
                            toastr.success(data.success);
                            setInterval('location.reload()', 1000);
                        } else {
                            setInterval('location.reload()', 1000);
                            toastr.error(data.error);
                        }
                    }
                });
            });

        })
    </script>
@endpush
