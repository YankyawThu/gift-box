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
                <form class="navbar-search navbar-search-light form-inline mr-sm-3" action="{{route('category.index')}}">
                    <div class="form-group mb-0">
                      <div class="input-group input-group-alternative input-group-merge searching">

                        <input class="form-control searching" placeholder="Search by name" type="text" name="name" value="{{request('name')}}">
                        <div class="input-group-prepend" >
                           <button class="btn input-group-text" type="submit"><i class="fas fa-search"></i></button>

                        </div>
                      </div>
                    </div>

                  </form>
            </div>
            <div>
                <a type="button" class="btn btn-success text-white btn-sm" id="show_add_form" data-toggle="modal" data-target="#add-form">+ ADD</a>
                @include('admin.category.add')
            </div>
        </div>
        <div class="table-responsive">
            <table class="table align-items-center mb-0">
                <thead>
                    <tr>
                        <th class="text-xxs font-weight-bolder opacity-7">NAME</th>
                        <th class="text-xxs font-weight-bolder opacity-7">CREATED</th>
                        <th class="opacity-7"></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($data as $key => $item)
                    <tr>
                        <td>
                            <p class="text-sm font-weight-bold mb-0">{{$item->name}}</p>
                        </td>
                        <td class="align-middle">
                            <span class="text-sm font-weight-bold">{{$item->created_at}}</span>
                        </td>
                        <td class="align-middle">
                            <a href="javascript:;" class="font-weight-bold text-sm px-1" data-id="{{$item->id}}" data-name="{{$item->name}}" data-toggle="modal" data-target="#edit-category-modal">
                                <span data-toggle="tooltip" data-original-title="Edit category">Edit</span>
                            </a>
                            <a href="javascript:;" class="font-weight-bold text-sm text-danger px-1" data-id="{{$item->id}}" data-toggle="modal" data-target="#delete-modal">
                                <span data-toggle="tooltip" data-original-title="Delete category">Delete</span>
                            </a>
                            @include('admin.category.edit', ['id' => 0])
                            @include('admin.layouts.delete', ['route' => 'category.destroy', 'id' => 0, 'name' => 'Delete Category'])
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
