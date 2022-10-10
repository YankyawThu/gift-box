@extends('admin.layouts.content')

@section('content-detail')
    <div>
        <div class="d-flex justify-content-between content_detail_header">
            <div class="align-self-center">
                <h3 class="mb-0">{{ __('Gift Items') }}</h3>
            </div>
            <div>
                <a type="button" class="btn btn-success text-white" id="show_add_form" data-toggle="modal" data-target="#add-form">+ ADD</a>
                @include('admin.item.add')
            </div>
        </div>
        <div class="table-responsive">  
            <table class="table align-items-center mb-0">
                <thead>
                    <tr>
                        <th class="text-xxs font-weight-bolder opacity-7">IMAGE</th>
                        <th class="text-xxs font-weight-bolder opacity-7 ps-2">NAME</th>
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
                            <p class="text-sm font-weight-bold mb-0">{{$item->price}}</p>
                        </td>
                        <td class="align-middle">
                            <span class="text-sm font-weight-bold">{{$item->created_at}}</span>
                        </td>
                        <td class="align-middle">
                            <a href="javascript:;" class="font-weight-bold text-sm px-1" data-toggle="tooltip" data-original-title="Edit item">
                                Edit
                            </a>
                            <a href="javascript:;" class="font-weight-bold text-sm text-danger px-1" data-id="{{$item->id}}" data-toggle="modal" data-target="#delete-form">
                                <span data-toggle="tooltip" data-original-title="Delete item">Delete</span>
                            </a>
                            @include('admin.layouts.delete', ['route' => 'items.destroy', 'id' => 0])
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