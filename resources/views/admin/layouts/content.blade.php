@extends('layouts.app')

@section('content')
    <div class="header bg-gradient-primary pb-7 pt-5 pt-md-8">
    </div>
    <div class="container-fluid mt--8">
        <div class="row">
            <div class="col-xl-12 mb-5 mb-xl-0">
                <div class="card bg-gradiant-default px-1">
                    @yield('content-detail')
                </div>
            </div>
            <div class="mt-3">
                <nav>
                    <ul class="pagination justify-content-end">
                        @yield('content-pagination')
                    </ul>
                </nav>                   
            </div>
        </div>
    </div>
@endsection