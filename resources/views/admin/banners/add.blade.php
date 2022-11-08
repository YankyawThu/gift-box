<div class="modal fade" data-backdrop="static" id="banner-add-form" tabindex="-1" role="dialog"
    aria-labelledby="add-form" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card border-0 shadow">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Add Banner') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.banners.store') }}" method="POST" id="banner-store-form"
                            enctype="multipart/form-data">
                            @csrf
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="place" class="form-control-label">Place</label>
                                        <input type="text" value="Index"
                                            class="form-control form-control-alternative is-valid" disabled />
                                    </div>
                                    <input type="hidden" name="place" value="index">
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="" class="form-control-label">Image</label>
                                        <input type="file" class="form-control-file" name="image" id="banner-image">
                                    </div>
                                </div>
                                <img src="{{ asset('image/default.png') }}" id="img_url" alt="your image" width="100"
                                    height="100" class="pl-3">

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="type" for="type" class="form-control-label">Type</label>
                                        <select class="form-select form-control form-control-alternative"
                                            aria-label="Select type" id="banner-type" name="type">
                                            <option value="" selected>Select Type</option>
                                            @foreach (config("config.bannerType") as $k => $v)
                                            <option value="{{ $k }}">{{ $v }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-12 mb-2">
                                    <div class="form-group" id="type_box">
                                    </div>
                                    <div class="d-none" id="ck-editor">
                                        <textarea name="value" id="editor" rows="10"></textarea>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="is_hot" class="form-control-label">Status</label>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-secondary active">
                                                <input type="radio" name="status" value="normal" id="status"
                                                    checked="">Normal
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" name="status" value="hidden">Hidden
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="sort" class="form-control-label">Sort</label>
                                        <input type="number" placeholder="Sort" value="1" name="sort" id="sort"
                                            value="index" class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer bg-secondary px-lg-2 px-1 text-center">
                        <button type="submit" form="banner-store-form" class="btn btn-success text-white">Add</button>
                        <button type="button" class="btn btn-primary text-white" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

