@extends('admin.layouts.content')

@section('content-detail')
<script>
    $(function() {
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
                action="{{ route('admin.banners.index') }}">
                <div class="form-group mb-0">
                    <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                        <select class="form-select form-control form-control-alternative" aria-label="Select Place"
                            name="place" id="place">
                            <option value="" @if (request('place')===null) selected @endif>Place
                            </option>
                            @foreach (config('config.bannerPlace') as $v)
                            <option value="{{ $v }}" @if (request('place')==$v) selected @endif>
                                {{ $v }}
                            </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                        <select class="form-select form-control form-control-alternative" aria-label="Select Type"
                            name="type" id="type">
                            <option value="" @if (request('type')===null) selected @endif>Place
                            </option>
                            @foreach (config('config.bannerType') as $v)
                            <option value="{{ $v }}" @if (request('type')==$v) selected @endif>
                                {{ $v }}
                            </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-md-2 input-group input-group-alternative input-group-merge searching m-1">
                        <select class="form-select form-control form-control-alternative" aria-label="Select Status"
                            name="status" id="status">
                            <option value="" @if (request('status')===null) selected @endif>Status
                            </option>
                            @foreach (config('config.bannerStatus') as $v)
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

        <div>
            <a type="button" class="btn btn-success btn-sm text-white" id="add_form" data-toggle="modal"
                data-target="#banner-add-form">+ ADD</a>
            @include('admin.banners.add')
        </div>
    </div>



    <div class="table-responsive">
        <table class="align-items-center mb-0 table">
            <thead>
                <tr>
                    <th class="text-xxs font-weight-bolder opacity-7">NO</th>
                    <th class="text-xxs font-weight-bolder opacity-7">PLACE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">IMAGE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">TYPE</th>
                    <th class="text-xxs font-weight-bolder opacity-7">STATUS</th>
                    <th class="text-xxs font-weight-bolder opacity-7">SORT</th>
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
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->place }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">
                            <img src="{{ route('admin.get-file', ['model' => 'Banner', 'id' => $item->id]) }}"
                                class="me-3" width="50" height="50">
                        </p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->type }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->status }}</p>
                    </td>
                    <td>
                        <p class="font-weight-bold mb-0 text-sm">{{ $item->sort }}</p>
                    </td>
                    <td class="align-middle">
                        <span class="font-weight-bold text-sm">{{ $item->created_at }}</span>
                    </td>
                    <td class="align-middle">
                        <a href="javascript:;" class="font-weight-bold px-1 text-sm" data-id="{{ $item->id }}"
                            data-image="{{ $item->image }}" data-image-path="{{ route("admin.get-file", ['model'=>
                            'Banner', 'id' => $item->id]) }}"
                            data-place="{{ $item->place }}" data-type="{{ array_search($item->type, config("config.bannerType")) }}"
                            data-value="{{ $item->value }}" data-status="{{ $item->status }}"
                            data-sort="{{ $item->sort }}" data-toggle="modal" data-target="#edit-banner-modal">
                            <span class="btn btn-sm btn-success" data-toggle="tooltip"
                                data-original-title="Edit Banner">
                                <i class="fas fa-edit"></i>
                            </span>
                        </a>
                        <a href="javascript:;" class="font-weight-bold text-danger px-1 text-sm"
                            data-id="{{ $item->id }}" data-toggle="modal" data-target="#delete-modal">
                            <span class="btn btn-sm btn-danger" data-toggle="tooltip"
                                data-original-title="Delete Banner">
                                <i class="fas fa-trash"></i>
                            </span>
                        </a>
                        @include('admin.banners.edit', ['id' => 0, 'item' => $item])
                        @include('admin.layouts.delete', [
                        'route' => 'banners.destroy',
                        'id' => $item->id,
                        'name' => 'Delete Banner',
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

@push('js')
<script src="https://cdn.ckeditor.com/ckeditor5/35.2.1/classic/ckeditor.js"></script>

<script>
    $(function() {
        $("#banner-add-form").find("#type_box").html("")

    ClassicEditor
        .create( document.querySelector( '#editor' ) )
        .catch( error => {
        console.error( error );
    });
    var ck_editor = $("#ck-editor")

    $('#banner-type').on('change', function() {
        var type_box = $("#type_box")
        if($(this).val() == 1){
            ck_editor.addClass("d-none")
            $(type_box).html(`
            <label for="type_" class="form-control-label">Box</label>
            <input type="text" placeholder="Enter Box" name="value_box" id="type_" class="form-control form-control-alternative is-valid" />
            `);
        }

        if($(this).val() == 2){
            ck_editor.addClass("d-none")
            $(type_box).html(`
            <label for="type_" class="form-control-label">Link</label>
            <input type="text" placeholder="https://example.com" name="value_link" id="type_" class="form-control form-control-alternative is-valid" />
            `);

        }

        if($(this).val() == 3){
            ck_editor.removeClass("d-none")
            $(type_box).html(`
            <label for="type_" class="form-control-label">Word</label>
            `
            );
        }
    })


});
</script>

@endpush