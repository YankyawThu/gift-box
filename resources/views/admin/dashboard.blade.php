@extends('admin.layouts.app')

@section('content')
@include('admin.layouts.headers.cards')

<div class="container-fluid mt--7">

    <div class="row">
        <div class="col-xl-6">
            <div class="card shadow">
                <div class="card-header bg-transparent">
                    <div class="row align-items-center">
                        <div class="col">
                            <h6 class="text-uppercase text-muted ls-1 mb-1">Users Information</h6>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="col-md-12 row">
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body text-center">
                                    <div class="form-inline">
                                        <i class="fa fa-rocket"></i>
                                        <span class="mx-2">{{ $todayusersignup }}</span>
                                    </div>
                                    <div class="form-inline">
                                        <span class="text-sm text-info">Today user signup</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body text-center">
                                    <div class="form-inline">
                                        <i class="fas fa-address-card"></i>
                                        <span class="mx-2">{{ $todayuserlogin }}</span>
                                    </div>
                                    <div class="form-inline">
                                        <span class="text-sm text-info">Today user login</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body text-center">
                    <div class="form-inline">
                        <i class="ni ni-money-coins"></i>
                        <span class="mx-2">{{ $paidMoneyRecharge }}</span>
                    </div>
                    <div class="form-inline">
                        <span class="text-sm text-info">Money Recharge <span class="badge badge-success">Paid</span></span>
                        <div class="col text-right">
                            <a class="btn btn-sm btn-primary" href="{{route('admin.recharge-orders.index')}}">See all</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body text-center">
                    <div class="form-inline">
                        <i class="ni ni-money-coins"></i>
                        <span class="mx-2">{{ $unpaidMoneyRecharge }}</span>
                    </div>
                    <div class="form-inline">
                        <span class="text-sm text-info">Money Recharge <span class="badge badge-danger">Pending</span></span>
                        <div class="col text-right">
                            <a class="btn btn-sm btn-primary" href="{{route('admin.recharge-orders.index')}}">See all</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body text-center">
                    <div class="form-inline">
                        <i class="ni ni-delivery-fast"></i>
                        <span class="mx-2">{{$shippingOrder}}</span>
                    </div>
                    <div class="form-inline">
                        <span class="text-sm text-info">Shipping Order</span>
                        <div class="col text-right">
                            <a class="btn btn-sm btn-primary" href="{{route('admin.delivery-orders.index')}}">See all</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body text-center">
                    <div class="form-inline">
                        <i class="fa fa-recycle"></i>
                        <span class="mx-2">{{$recycleOrder}}</span>
                    </div>
                    <div class="form-inline">
                        <span class="text-sm text-info">Recycle Order</span>
                        <div class="col text-right">
                            <a class="btn btn-sm btn-primary" href="{{route('admin.recycle-orders.index')}}">See all</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    @include('layouts.footers.auth')
</div>
@endsection

@push('js')
<script src="{{ asset('argon') }}/vendor/chart.js/dist/Chart.min.js"></script>
<script src="{{ asset('argon') }}/vendor/chart.js/dist/Chart.extension.js"></script>
@endpush
