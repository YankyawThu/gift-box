@extends('admin.layouts.content')

@section('content')
    <div class="header bg-gradient-primary pb-7 pt-5 pt-md-8">
    </div>
    <div class="container-fluid mt--8">
        <div class="row">
            <div class="col-xl-5 order-xl-2 mb-5 mb-xl-0">
                <div class="card bg-gradiant-default px-1">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 order-lg-2">
                            <div class="box_detail_img">
                                <a href="#">
                                    <img src="{{ $data['image'] }}" class="rounded-circle">
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
                <div class="card bg-gradiant-default px-1 mt-2">
                    <div class="card-body">
                        <div class="selected_item_area">
                            @php
                                foreach ($data['boxItems'] as $key => $item) {
                                    echo "<div class='remove_item_".$item->id." mr-3 mb-2 d-inline-block'><img class='item-img' width=50 height=50 src=".getFileUrlFromAkoneyaMedia($item->image)."><span class='pl-2 clear remove-span' data-id='".$item->id."'> <i class='ni ni-fat-remove remove-icon'></i></span></div>";
                                }
                            @endphp
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-7 order-xl-1">
                <div class="card bg-gradiant-default px-1">
                    <div class="items_container px-3">
                    </div>
                    <div class="loading text-center py-1">loading...</div>
                </div>
                <a type="button" class="btn btn-success mt-4 text-white" id="save_box_item">Save</a>
                <a type="button" class="btn btn-light mt-4 text-white" href="{{route('boxes.index')}}">Back</a>
            </div>
        </div>
    </div>
    <script>
        $(function() {
            var boxItems = {!! json_encode($data['boxItems']) !!}
            var boxId = {!! json_encode($data['id']) !!}
            var firstTenItems = {!! json_encode($items) !!}
            var itemIds = []
            var page = 2
            var lastPage = firstTenItems.last_page
            $('.loading').hide()
            boxItems.forEach((item,i) => {
                itemIds.push(item.id)
            })
            addItems(firstTenItems.data)
            $(document).on('click','.add_item',function() {
                var id = $(this).data('id')
                var name = $(this).data('name')
                var image = $(this).data('img')
                if(!itemIds.includes(id)) {
                    itemIds.push(id)
                    $('.selected_item_area').append(`<div class='remove_item_${id} mr-3 mb-2 d-inline-block'><img class='item-img' width=50 height=50 src='${image}'><span class='pl-2 clear remove-span' data-id='${id}'><i class='ni ni-fat-remove remove-icon'></i></span></div>`)
                }
            })
            $(document).on('click','.clear',function() {
                var id = $(this).data('id')
                itemIds = $.grep(itemIds, function(value) {
                    $(`.remove_item_${id}`).remove()
                    return value != id
                })
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

            $('.items_container').on('scroll', function() {
                var isEnd = ($(this).innerHeight() + $(this).scrollTop()) >= $(this)[0].scrollHeight
                if (isEnd && page <= lastPage) {
                    $('.loading').show()
                    $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: "{{ route('box_items') }}",
                        data: {
                            "page": page,
                            "_token": "{{ csrf_token() }}"
                        },
                        success: function(response) {
                            $('.loading').hide()
                            console.log(response.data)
                            addItems(response.data)
                            page++

                        },
                        fail: function() {
                            console.log('fail')
                        }
                    })
                }
            })

            function addItems(items) {
                items.forEach((item,i) => {
                    if(itemIds.includes(item.id)) {
                        $('.items_container').append(`<button type='button' class='btn-icon-clipboard add_item p-2 item-active' data-id='${item.id}' data-name='${item.name}' data-img={{getFileUrlFromAkoneyaMedia('${item.image}')}}><div class='d-flex justify-content-start'><div><img src='{{getFileUrlFromAkoneyaMedia('${item.image}')}}' class='me-3' width='70' height='70'></div><div class='ml-2 align-self-center'><div>${item.name}</div><div><b>${item.id}</b></div></div></div></button>`)
                    }
                    else
                        $('.items_container').append(`<button type='button' class='btn-icon-clipboard add_item p-2' data-id='${item.id}' data-name='${item.name}' data-img={{getFileUrlFromAkoneyaMedia('${item.image}')}}><div class='d-flex justify-content-start'><div><img src='{{getFileUrlFromAkoneyaMedia('${item.image}')}}' class='me-3' width='70' height='70'></div><div class='ml-2 align-self-center'><div>${item.name}</div><div><b>${item.id}</b></div></div></div></button>`)
                })
            }
        })

    </script>
@endsection
