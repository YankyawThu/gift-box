@extends('admin.layouts.content')

@section('content-detail')
<script>
    $(function(){
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
            <form class="navbar-search navbar-search-light form-inline mr-sm-3"
                action="{{ route('admin.items.index') }}">
                <div class="form-group mb-0">
                    <div class="input-group input-group-alternative input-group-merge searching">

                        <input class="form-control searching" placeholder="Search by name" type="text" name="name"
                            value="{{ request('name') }}">
                        <div class="input-group-prepend">
                            <button class="btn input-group-text" type="submit"><i class="fas fa-search"></i></button>

                        </div>
                    </div>
                </div>

            </form>
        </div>

        <div>
            <a type="button" class="btn btn-success btn-sm text-white" id="show_add_form" data-toggle="modal"
                data-target="#add-form">+ ADD</a>
            @include('admin.item.add')
        </div>
    </div>

    <div class="table-responsive">
        <table class="align-items-center mb-0 table">
            <thead>
                <tr>
                    <th class="text-xxs font-weight-bolder opacity-7">NO.</th>
                    <th class="text-xxs font-weight-bolder opacity-7">IMAGE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">NAME</th>
                    <th class="text-xxs font-weight-bolder opacity-7">Quantity</th>
                    <th class="text-xxs font-weight-bolder opacity-7">BUY PRICE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">SELL PRICE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">Delivery Fee</th>
                    <th class="text-xxs font-weight-bolder opacity-7">Status</th>
                    <th class="text-xxs font-weight-bolder opacity-7">CREATED</th>
                    <th class="opacity-7"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $key => $item)
                <tr>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $data->firstItem() + $key}}</p>
                    </td>
                    <td>
                        <div class="d-flex py-1">
                            <div>
                                {{-- <img src="{{ route("admin.get-file", ["model" => "GiftItem", "id" => $item->id]) }}" class="me-3" width="70"
                                    height="70"> --}}
                                    <img src="{{getFileUrlFromAkoneyaMedia($item->image)}}" class="me-3" width="70"
                                    height="70" >
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->name }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->qty }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->buy_price }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->sell_price }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->delivery_fee }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">
                            @if ($item->status == 'online')
                            <span class="badge badge-success">Online</span>
                            @else
                            <span class="badge badge-danger">Offline</span>
                            @endif
                        </p>
                    </td>
                    <td class="align-middle">
                        <span class="font-weight-bold text-sm">{{ $item->created_at }}</span>
                    </td>
                    <td class="align-middle">
                        <a href="javascript:;" class="font-weight-bold px-1 text-sm" data-id="{{ $item->id }}"
                            data-name="{{ $item->name }}" data-qty="{{ $item->qty }}" data-image="{{ $item->image }}"
                            {{-- data-image_path="{{ route("admin.get-file", ["model" => "GiftItem", "id" => $item->id]) }}" --}}
                            data-image_path="{{ getFileUrlFromAkoneyaMedia($item->image) }}"
                            data-buy_price="{{ $item->buy_price }}" data-sell_price="{{ $item->sell_price }}" data-delivery_fee="{{$item->delivery_fee}}" data-toggle="modal" data-target="#edit-item-modal">
                            <span class="btn btn-sm btn-success" data-toggle="tooltip" data-original-title="Edit item">
                                <i class="fas fa-edit"></i>
                            </span>
                        </a>
                        <a href="javascript:;" class="font-weight-bold text-danger px-1 text-sm"
                            data-id="{{ $item->id }}" data-toggle="modal" data-target="#delete-modal">
                            <span class="btn btn-sm btn-danger" data-toggle="tooltip" data-original-title="Delete item">
                                <i class="fas fa-trash"></i>
                            </span>
                        </a>
                        @include('admin.item.edit', ['id' => 0, 'item' => $item])
                        @include('admin.layouts.delete', [
                        'route' => 'items.destroy',
                        'id' => $item->id,
                        'name' => 'Delete Gift
                        Item',
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
{{ $data->appends($_GET)->links() }}
@endsection
