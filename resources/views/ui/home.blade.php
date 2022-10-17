@extends('ui.layouts.app')
@section('content')

    <div class="row">
            @if(isset($win_value))
                <?php print($win_value);?>
            @endif
            @foreach ($data as $item)

                <div class="col-xl-3 col-md-6">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="{{getFileUrlFromAkoneyaMedia($item->image)}}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title">{{$item->name}}</h5>
                        <p class="card-text">{{$item->price}}</p>
                        <a href="{{route('openbox',[$item->id,1])}}" class="btn btn-sm btn-primary">1 time</a>
                        <a href="#" class="btn btn-sm btn-primary">5 times</a>

                        </div>
                    </div>
                </div>

            @endforeach


    </div>

@endsection

