@extends('layouts.app')

@section('content')
    <div class="header bg-gradient-primary pb-6 pt-5 pt-md-8">
    </div>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col-xl-12 mb-5 mb-xl-0">
                <div class="card bg-gradiant-default px-1">
                    @yield('content-detail')
                </div>
                <div class="mt-3">
                    @yield('content-pagination')                    
                </div>
            </div>
        </div>
    </div>
@endsection