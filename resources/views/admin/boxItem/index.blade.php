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
                    <div class="selected_item_area">
                    </div>
                    <hr class="my-4" />
                    @foreach ($items as $item)
                        <div class="add_item" data-id="{{$item->id}}" data-name="{{$item->name}}">{{$item->name}}</div>
                    @endforeach
                </div>
                <a type="button" class="btn btn-success text-white" id="save_box_item">Save</a>
            </div>
        </div>
    </div>

    <script>
        var boxItems = {!! json_encode($data['boxItems']) !!}
        var boxId = {!! json_encode($data['id']) !!}
        var itemIds = []
        boxItems.forEach(item => {
            $('.selected_item_area').append("<span class='box_selected_item_short_label remove_item_"+item.id+" mr-2'>"+item.name+"<span class='pl-2 clear' data-id='"+item.id+"'>clear</span></span>")
            itemIds.push(item.id)
        })
        $('.add_item').on('click', function() {
            var id = $(this).data('id')
            var name = $(this).data('name')
            if(!itemIds.includes(id)) {
                itemIds.push(id)
                $('.selected_item_area').append("<span class='box_selected_item_short_label remove_item_"+id+" mr-2'>"+name+"</span>")
                $('<span>clear</span>').addClass('pl-2 clear').appendTo('.remove_item_'+id+'')
            }
            console.log(itemIds)
        })
        $('.clear').on('click', function() {
            var id = $(this).data('id')
            console.log(id)
            itemIds = $.grep(itemIds, function(value) {
                $('.remove_item_'+id+'').remove()
                return value != id
            })
            console.log(itemIds)
        })
        $('#save_box_item').on('click', function() {
            $.ajax({
                type: "PUT",
                dataType: "json",
                url: "{{route('itemBox.update',$data['id'])}}",
                data: {
                    'boxId': boxId,
                    'itemId': itemIds,
                    "_token": "{{ csrf_token() }}"
                },
                success: function(data) {
                    location.reload()
                    // if (data.success) {
                    //     toastr.success(data.success);
                    // }
                    // else{
                    //     setInterval('location.reload()', 1000);
                    //     toastr.error(data.error);
                    // }
                }
            })
        })
    </script>
@endsection