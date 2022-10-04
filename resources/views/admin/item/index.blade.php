@extends('admin.layouts.content')

@section('content-detail')
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
                @foreach ($data as $item)
                <tr>
                    <td>
                        <div class="d-flex px-2 py-1">
                            <div>
                                <img src="{{$item->image}}" class="avatar avatar-sm me-3">
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="text-xs font-weight-bold mb-0">{{$item->name}}</p>
                    </td>
                    <td>
                        <p class="text-xs font-weight-bold mb-0">{{$item->price}}</p>
                    </td>
                    <td class="align-middle">
                        <span class="text-xs font-weight-bold">{{$item->created_at}}</span>
                    </td>
                    <td class="align-middle">
                        <a href="javascript:;" class="font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                            Edit
                        </a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection

@section('content-pagination')

<nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
      {{$data}}
    </ul>
</nav>
@endsection