@extends('admin.layouts.app')

@section('content')

{{-- loading image --}}
<div class="se-pre-con"></div>

<div class="header bg-gradient-primary pb-7 pt-5 pt-md-8">
</div>
<div class="container-fluid mt--8">
    <div class="row">
        <div class="col-xl-12">
            <div class="card bg-gradiant-default px-1">
                @yield('content-detail')
            </div>
        </div>
        <div class="col-xl-12 mt-3">
            <nav>
                <ul class="pagination justify-content-end">
                    @yield('content-pagination')
                </ul>
            </nav>
        </div>
    </div>
</div>
@endsection

@push('js')
<script src="{{ asset('js/js.js') }}"></script>
@endpush
