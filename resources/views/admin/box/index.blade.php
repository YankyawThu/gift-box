@extends('admin.layouts.content')

@section('content-detail')
    <script>
        $(function() {
            @if (session('status'))
                toastr.success('{{ session('status') }}')
            @endif
        })
    </script>

    <div>
        <div class="d-flex justify-content-between content_detail_header">
            <div class="align-self-center">
                <h3 class="mb-0">{{ __('Gift Box') }}</h3>
            </div>
            <div>
                <a type="button" class="btn btn-success text-white" id="show_add_form" data-toggle="modal" data-target="#add-form">+ ADD</a>
                @include('admin.box.add')
            </div>
        </div>
        <div class="table-responsive">  
            <table class="table align-items-center mb-0">
                <thead>
                    <tr>
                        <th class="text-xxs font-weight-bolder opacity-7">IMAGE</th>
                        <th class="text-xxs font-weight-bolder opacity-7">NAME</th>
                        <th class="text-xxs font-weight-bolder opacity-7">CATEGORY</th>
                        <th class="text-xxs font-weight-bolder opacity-7">PRICE</th>
                        <th class="text-xxs font-weight-bolder opacity-7">CREATED</th>
                        <th class="opacity-7"></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($data as $key => $item)
                    <tr>
                        <td>
                            <div class="d-flex py-1">
                                <div>
                                    <img src="{{$item->image}}" class="me-3" width="70" height="70">
                                </div>
                            </div>
                        </td>
                        <td>
                            <p class="text-sm font-weight-bold mb-0">{{$item->name}}</p>
                        </td>
                        <td>
                            <p class="text-sm font-weight-bold mb-0">{{$item->category->name}}</p>
                        </td>
                        <td>
                            <p class="text-sm font-weight-bold mb-0">{{$item->price}}</p>
                        </td>
                        <td class="align-middle">
                            <span class="text-sm font-weight-bold">{{$item->created_at}}</span>
                        </td>
                        <td class="align-middle">
                            <a href="javascript:;" class="font-weight-bold text-sm px-1" data-id="{{$item->id}}" data-name="{{$item->name}}" data-image="{{$item->image}}" data-image_path="{{ getImageFromAkoneyaMedia($item->image) }}" data-price="{{$item->price}}" data-category_id="{{$item->category->id}}" data-toggle="modal" data-target="#edit-box-modal">
                                <span data-toggle="tooltip" data-original-title="Edit box">Edit</span>
                            </a>
                            <a href="javascript:;" class="font-weight-bold text-sm text-danger px-1" data-id="{{$item->id}}" data-toggle="modal" data-target="#delete-modal">
                                <span data-toggle="tooltip" data-original-title="Delete box">Delete</span>
                            </a>
                            @include('admin.box.edit', ['id' => 0])
                            @include('admin.layouts.delete', ['route' => 'boxes.destroy', 'id' => 0])
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection

@section('content-pagination')
    {{$data}}
@endsection