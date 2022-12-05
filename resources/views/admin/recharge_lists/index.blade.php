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
                action="{{ route('admin.recharge-lists.index') }}">
                <div class="form-group mb-0">
                    <div class="input-group input-group-alternative input-group-merge searching">
                        <input class="form-control searching" placeholder="Search by Amount" type="number" name="amount"
                            value="{{ request('amount') }}">
                        <div class="input-group-prepend">
                            <button class="btn input-group-text gift-log-search-btn" type="submit">
                                <i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>

            </form>
        </div>

        <div>
            <a type="button" class="btn btn-success btn-sm text-white" id="show_add_form" data-toggle="modal"
                data-target="#add-form">+ ADD</a>
            @include('admin.recharge_lists.add')
        </div>
    </div>

    <div class="table-responsive">
        <table class="align-items-center mb-0 table">
            <thead>
                <tr>
                    <th class="text-xxs font-weight-bolder opacity-7">No</th>
                    <th class="text-xxs font-weight-bolder opacity-7">AMOUNT</th>
                    <th class="text-xxs font-weight-bolder opacity-7">CREATED</th>
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
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->amount }}</p>
                    </td>
                    <td class="align-middle">
                        <span class="font-weight-bold text-sm">{{ $item->created_at }}</span>
                    </td>
                    <td class="align-middle">
                        <a href="javascript:;" class="font-weight-bold px-1 text-sm" data-id="{{ $item->id }}"
                            data-amount="{{ $item->amount }}" data-toggle="modal" data-target="#edit-recharge-modal">
                            <span class="btn btn-sm btn-success" data-toggle="tooltip"
                                data-original-title="Edit Recharge">
                                <i class="fas fa-edit"></i>
                            </span>
                        </a>
                        <a href="javascript:;" class="font-weight-bold text-danger px-1 text-sm"
                            data-id="{{ $item->id }}" data-toggle="modal" data-target="#delete-modal">
                            <span class="btn btn-sm btn-danger" data-toggle="tooltip"
                                data-original-title="Delete Recharge">
                                <i class="fas fa-trash"></i>
                            </span>
                        </a>
                        @include('admin.recharge_lists.edit', ['id' => $item->id, 'item' => $item])
                        @include('admin.layouts.delete', [
                        'route' => 'recharge-lists.destroy',
                        'id' => $item->id,
                        'name' => 'Delete Recharge',
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
