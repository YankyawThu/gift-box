@extends('admin.layouts.content')

@section('content-detail')

<script>
    $(function() {
        @if (session('status'))
            toastr.success('{{ session('status') }}')
        @endif

        @if ($errors->any())
            toastr.error('{{ $errors->all()[0] }}')
        @endif
    })
</script>
<div>
    <div class="d-flex justify-content-between content_detail_header">
        <div class="align-self-center">

        </div>

        <div>

        </div>
    </div>

    <div class="table-responsive">
        <div class="card border-0 shadow">
            <div class="card-header text-left">
                <h3 class="mb-0">{{ __('Edit Setting') }}</h3>
            </div>
            <form action="{{ $url }}" method="POST" enctype="multipart/form-data">
                <div class="card-body bg-secondary">
                    @csrf

                    @if ($method == 'POST')
                    @method('POST')
                    @else
                    @method('PUT')
                    @endif

                    <div class="row">
                        <div class="col-md-12 border-bottom border-primary py-3">
                            <div class="col-6 form-group">
                                <label for="logo-image" class="form-control-label">Image</label>
                                <input type="file" class="form-control-file" id="logo-image" name="logo_image"
                                    id="logo-image">
                            </div>
                            <img src="{{ $data ? route('admin.get-file', ['model' => 'model', 'id' => '1', 'path' => $data->logo_image]) : "" }}"
                                id="logo-image-url" alt="your image" width="100" height="100" class="pl-3">
                        </div>

                        <div class="col-md-12 py-3">
                            <div class="col-6 form-group">
                                <label for="place" class="form-control-label">One Rmb to Coin Number</label>
                                <input type="text" value="{{ $data ? $data->one_rmb_to_coin_num : "" }}"
                                    name="one_rmb_to_coin_num" class="form-control form-control-alternative is-valid" />
                            </div>
                        </div>
                        <div class="col-md-12 border-bottom border-primary py-3">
                            <div class="col-6 form-group">
                                <label for="place" class="form-control-label">Recovery Discount</label>
                                <input type="text" value="{{ $data ? $data->recovery_discount : "" }}"
                                    name="recovery_discount" class="form-control form-control-alternative is-valid" />
                            </div>
                        </div>

                        <div class="col-md-12 pt-3">
                            <div class="col-6 form-group">
                                <label for="hot_box_banner" class="form-control-label">Hot Box Banner</label>
                                <input type="file" class="form-control-file" id="hot_box_banner" name="hot_box_banner"
                                    id="hot_box_banner">
                            </div>
                            <img src="{{ $data ? route('admin.get-file', ['model' => 'model', 'id' => '1', 'path' => $data->hot_box_banner]) : "" }}"
                                id="hot_box_banner_url" alt="your image" width="100" height="100" class="pl-3">
                        </div>
                        <div class="col-md-12 border-bottom border-primary py-3">
                            <div class="col-6 form-group">
                                <label for="cheap_box_banner" class="form-control-label">Cheap Box Banner</label>
                                <input type="file" class="form-control-file" id="cheap_box_banner"
                                    name="cheap_box_banner" id="cheap_box_banner">
                            </div>
                            <img src="{{ $data ? route('admin.get-file', ['model' => 'model', 'id' => '1', 'path' => $data->cheap_box_banner]) : "" }}"
                                id="cheap_box_banner_url" alt="your image" width="100" height="100" class="pl-3">
                        </div>

                        <div class="col-md-12 pt-3">
                            <div class="col-6 form-group">
                                <label for="service_number" class="form-control-label">Service Number</label>
                                <input type="file" class="form-control-file" id="service_number" name="service_number"
                                    id="service_number">
                            </div>
                            <img src="{{ $data ? route('admin.get-file', ['model' => 'model', 'id' => '1', 'path' => $data->service_number]) : "" }}"
                                id="service_number_url" alt="your image" width="100" height="100" class="pl-3">
                        </div>
                        <div class="col-md-12 border-bottom border-primary py-3">
                            <div class="col-6 form-group">
                                <label for="service_qrcode" class="form-control-label">Service Qr Code</label>
                                <input type="file" class="form-control-file" id="service_qrcode" name="service_qrcode"
                                    id="service_qrcode">
                            </div>
                            <img src="{{ $data ? route('admin.get-file', ['model' => 'model', 'id' => '1', 'path' => $data->service_qrcode]) : "" }}"
                                id="service_qrcode_url" alt="your image" width="100" height="100" class="pl-3">
                        </div>

                        <div class="col-md-12 pt-3">
                            <div class="col-6 form-group">
                                <label for="retail_1" class="form-control-label">Retail 1</label>
                                <input type="text" value="{{ $data ? $data->retail_1 : "" }}" name="retail_1"
                                    id="retail_1" class="form-control form-control-alternative is-valid" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="col-6 form-group">
                                <label for="retail_2" class="form-control-label">Retail 2</label>
                                <input type="text" value="{{ $data ? $data->retail_2 : "" }}" name="retail_2"
                                    id="retail_2" class="form-control form-control-alternative is-valid" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="col-6 form-group">
                                <label for="retail_3" class="form-control-label">Retail 3</label>
                                <input type="text" value="{{ $data ? $data->retail_3 : "" }}" name="retail_3"
                                    id="retail_3" class="form-control form-control-alternative is-valid" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="col-6 form-group">
                                <label for="place" class="form-control-label">kou</label>
                                <input type="text" value="{{ $data ? $data->kou : "" }}" name="kou"
                                    class="form-control form-control-alternative is-valid" />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="card-footer bg-secondary px-lg-2 px-1 text-center">
                    <button type="submit" class="btn btn-success text-white">Update</button>
                    <button type="reset" class="btn btn-primary text-white" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>

    </div>
</div>
@endsection

@push('js')
<script>
    $(function() {
        $('#logo-image', ).on('change', function() {
            $('#logo-image-url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0])
        })

        $('#hot_box_banner', ).on('change', function() {
            $('#hot_box_banner_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0])
        })

        $('#cheap_box_banner', ).on('change', function() {
            $('#cheap_box_banner_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0])
        })

        $('#service_number', ).on('change', function() {
            $('#service_number_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0])
        })

        $('#service_qrcode', ).on('change', function() {
            $('#service_qrcode_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0])
        })

    });
</script>
@endpush
