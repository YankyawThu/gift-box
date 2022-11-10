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

        </div>

        <div>
            {{-- <a type="button" class="btn btn-success btn-sm text-white" id="show_add_form" data-toggle="modal"
                data-target="#add-form">+ ADD</a>
            @include('admin.rule_configs.add') --}}
        </div>
    </div>

    <div class="table-responsive">
        <table class="align-items-center mb-0 table">
            <thead>
                <tr>
                    <th class="text-xxs font-weight-bolder opacity-7">No</th>
                    <th class="text-xxs font-weight-bolder opacity-7">Type</th>
                    <th class="text-xxs font-weight-bolder opacity-7">Title</th>
                    <th class="text-xxs font-weight-bolder opacity-7">Text</th>
                    <th class="text-xxs font-weight-bolder opacity-7">Public Status</th>
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
                        <p class="font-weight-bold mb-0 text-sm">{{
                            config("policy_category.policyCategories.".$item->policy_category_id) }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->header }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ Str::substr($item->description, 0, 100) }}</p>
                    </td>
                    <td class="align-middle">
                        <span class="badge badge-{{ $item->public_status ? 'success' : 'light' }}">{{
                            $item->public_status ? "On" : "Off" }}</span>
                    </td>
                    <td class="align-middle">
                        <a href="javascript:;" class="font-weight-bold px-1 text-sm" data-id="{{ $item->id }}"
                            data-policy_category_id="{{ $item->policy_category_id }}" data-header="{{ $item->header }}"
                            data-description="{{ $item->description }}" data-public_status="{{ $item->public_status }}"
                            data-toggle="modal" data-target="#edit-policy-modal">
                            <span class="btn btn-sm btn-success" data-toggle="tooltip"
                                data-original-title="Edit Protocol Policy">
                                <i class="fas fa-edit"></i>
                            </span>
                        </a>
                        {{-- <a href="javascript:;" class="font-weight-bold text-danger px-1 text-sm"
                            data-id="{{ $item->id }}" data-toggle="modal" data-target="#delete-modal">
                            <span class="btn btn-sm btn-danger" data-toggle="tooltip"
                                data-original-title="Delete Protocol Policy">
                                <i class="fas fa-trash"></i>
                            </span>
                        </a> --}}
                        @if ($loop->first)
                        @include('admin.rule_configs.edit', ['id' => 0])
                        @endif

                        {{-- @include('admin.layouts.delete', [
                        'route' => 'rule-policies.destroy',
                        'id' => $item->id,
                        'name' => 'Delete Prtocol Policy',
                        ]) --}}
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
<script src='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js'></script>

<script src="{{ asset('ckeditor/build/ckeditor.js') }}"></script>

<script>
    $(function() {

    // text-editor
    ClassicEditor
        .create(document.querySelector('#description'))
        .catch(error => {
            console.error(error);
    });

});
</script>
@endpush
