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
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                          <li class="page-item disabled">
                            <a class="page-link" href="javascript:;" tabindex="-1">
                              <i class="fa fa-angle-left"></i>
                              <span class="sr-only">Previous</span>
                            </a>
                          </li>
                          <li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
                          <li class="page-item active"><a class="page-link" href="javascript:;">2</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
                          <li class="page-item">
                            <a class="page-link" href="javascript:;">
                              <i class="fa fa-angle-right"></i>
                              <span class="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
@endsection