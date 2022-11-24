<div class="modal fade" data-backdrop="static" id="edit-banner-modal" tabindex="-1" role="dialog"
    aria-labelledby="edit-banner-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card border-0 shadow">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Edit Banner') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.banners.update', 0) }}" method="POST" id="banner-update-form"
                            enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <input type="text" name="id" id="id" hidden>
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
                                        <label for="banner-image" class="form-control-label">Image</label>
                                        <input type="file" class="form-control-file" id="edit-banner-image" name="new_image"
                                            id="banner-image">
                                        <input type="text" name="image" id="image" hidden>
                                    </div>
                                </div>
                                <img src="" id="edit-banner-img-url" alt="your image" width="100" height="100"
                                    class="pl-3">

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="type" for="type" class="form-control-label">Type</label>
                                        <select class="form-select form-control form-control-alternative"
                                            aria-label="Select type" id="edit-banner-type" name="type">
                                            <option value="">Select Type</option>
                                            @foreach (config("config.bannerType") as $k => $v)
                                            <option value="{{ $k }}">{{ $v }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-12 mb-3">
                                    <div class="" id="edit_type_box">
                                        <input type="text" id="value" class="form-control form-control-alternative is-valid" />
                                    </div>
                                    <div class="d-none" id="edit-ck-editor">
                                        <textarea name="value" id="edit-editor" rows="10"></textarea>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group" id="radio-edit">
                                        <label for="is_hot" class="form-control-label">Status</label>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons" id="status">
                                            <label class="btn btn-secondary" id="status">
                                                <input type="radio" name="status" value="normal" id="status_normal"
                                                    >Normal
                                            </label>
                                            <label class="btn btn-secondary" id="status">
                                                <input type="radio" name="status" value="hidden" id="status_hidden">Hidden
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {{-- <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="sort" class="form-control-label">Sort</label>
                                        <input type="number" placeholder="Sort" name="sort" id="sort"
                                            value="index" class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div> --}}
                            </div>
                        </form>
                    </div>
                    <div class="card-footer bg-secondary px-lg-2 px-1 text-center">
                        <button type="submit" form="banner-update-form" class="btn btn-success text-white">Update</button>
                        <button type="button" class="btn btn-primary text-white" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

@push('js')

<script>
    $(function() {
    var ck_editor = $("#edit-ck-editor")

    $('#edit-banner-type').on('change', function() {
        var type_box = $("#edit_type_box")
        if($(this).val() == 1){
            ck_editor.addClass("d-none")
            $(type_box).html(`
            <label for="type_" class="form-control-label">Box</label>
            <input type="text" placeholder="Enter Box" name="value" id="type_" class="form-control form-control-alternative is-valid" />
            `);
        }

        if($(this).val() == 2){
            ck_editor.addClass("d-none")
            $(type_box).html(`
            <label for="type_" class="form-control-label">Link</label>
            <input type="text" placeholder="https://example.com" name="value" id="type_" class="form-control form-control-alternative is-valid" />
            `);

        }

        if($(this).val() == 3){
            ck_editor.removeClass("d-none")
            $(type_box).html(`
            <label for="type_" class="form-control-label">Word</label>
            `
            );
        }
    })


});
</script>

@endpush
