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
                <form class="navbar-search navbar-search-light form-inline mr-sm-3" action="{{route('boxes.index')}}" name="box-search-form">
                    <div class="form-group mb-0">
                      <div class="input-group input-group-alternative input-group-merge searching">

                        <input class="form-control searching" placeholder="Search by name" type="text" name="name" value="{{request('name')}}">
                        <div class="input-group-prepend" >
                           <button class="btn input-group-text" type="submit"><i class="fas fa-search"></i></button>

                        </div>
                      </div>
                    </div>
                    <div class="form-group mb-0 category-filter">
                        <select class="form-select form-control form-control-alternative" aria-label="Default select example" name="category_id" id="category_id">
                            <option value="" @if(request('category_id') === null) selected @endif>Select Category</option>
                            @foreach ($categories as $item)
                                <option value="{{$item->id}}" @if(request('category_id') == $item->id) selected @endif>{{$item->name}}</option>
                            @endforeach
                        </select>
                    </div>
                </form>

            </div>
            <div>
                <a type="button" class="btn btn-success text-white btn-sm" id="show_add_form" data-toggle="modal" data-target="#add-form">+ ADD</a>
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
                                    <img src="{{getFileUrlFromAkoneyaMedia($item->image)}}" class="me-3" width="70" height="70">
                                </div>
                            </div>
                        </td>
                        <td>
                            <p class="text-sm font-weight-bold mb-0">{{$item->name}}</p>
                        </td>
                        <td>
                            <p class="text-sm font-weight-bold mb-0">{{optional($item->category)->name}}</p>
                        </td>
                        <td>
                            <p class="text-sm font-weight-bold mb-0">{{$item->price}}</p>
                        </td>
                        <td class="align-middle">
                            <span class="text-sm font-weight-bold">{{$item->created_at}}</span>
                        </td>
                        <td class="align-middle">
                            <a href="{{route('boxes.show', $item->id)}}" class="font-weight-bold text-sm text-success px-1">
                                <span data-toggle="tooltip" data-original-title="View box">View</span>
                            </a>
                            <a href="javascript:;" class="font-weight-bold text-sm px-1" data-id="{{$item->id}}" data-name="{{$item->name}}" data-image="{{$item->image}}" data-image_path="{{ getFileUrlFromAkoneyaMedia($item->image) }}" data-price="{{$item->price}}" data-category_id="{{optional($item->category)->id}}" data-toggle="modal" data-target="#edit-box-modal">
                                <span data-toggle="tooltip" data-original-title="Edit box">Edit</span>
                            </a>
                            <a href="javascript:;" class="font-weight-bold text-sm text-danger px-1" data-id="{{$item->id}}" data-toggle="modal" data-target="#delete-modal">
                                <span data-toggle="tooltip" data-original-title="Delete box">Delete</span>
                            </a>
                            @include('admin.box.edit', ['id' => 0])
                            @include('admin.layouts.delete', ['route' => 'boxes.destroy', 'id' => 0, 'name' => 'Delete Gift Box'])
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

