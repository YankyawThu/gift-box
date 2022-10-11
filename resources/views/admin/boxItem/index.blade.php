@extends('admin.layouts.content')

@section('content')
    <div class="header bg-gradient-primary pb-7 pt-5 pt-md-8">
    </div>
    <div class="container-fluid mt--8">
        <div class="row">
            <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                <div class="card bg-gradiant-default px-1">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 order-lg-2">
                            <div class="box_detail_img">
                                <a href="#">
                                    {{-- <img src="{{ $data['image'] }}" class="rounded-circle"> --}}
                                    <img src="https://brouwhoeve.es/wp-content/uploads/2022/02/istockphoto-1128262881-612x612-1.jpg" class="rounded-circle">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    </div>
                    <div class="card-body pt-0 pt-md-5">
                        <div class="text-center">
                            <h3>
                                {{ $data['name'] }}
                            </h3>
                            <div class="h5 font-weight-300">
                                <i class="ni location_pin mr-2"></i>{{ $data['category'] }}
                            </div>
                            <div>
                                <i class="ni education_hat mr-2"></i>{{ $data['created'] }}
                            </div>
                            <hr class="my-4" />
                            <div>
                                @foreach($data['boxItems'] as $item)
                                    <span class="box_selected_item_short_label">{{$item->name}}</span>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8 order-xl-1">
                <div class="card bg-gradiant-default px-1">

                </div>
            </div>
        </div>
    </div>
@endsection