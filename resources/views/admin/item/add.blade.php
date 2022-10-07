<div class="modal fade" data-backdrop="static" id="add-form" tabindex="-1" role="dialog" aria-labelledby="add-form" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card shadow border-0"> 
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Add Gift Item') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('items.store') }}" method="POST" id="item-store-form">
                            @csrf
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="example-search-input" class="form-control-label">Name</label>
                                        <input type="text" placeholder="Name" name="name" class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="example-search-input" class="form-control-label">Price</label>
                                        <input type="number" placeholder="Price" name="price" class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="" class="form-control-label">Image</label>
                                        <input type="file" class="form-control-file" name="image" id="item-image">
                                    </div>
                                </div>
                                <img src="{{ asset('image/default.png') }}" id="img_url" alt="your image" width="100" height="100" class="pl-3">
                            </div>
                        </form>
                    </div>
                    <div class="card-footer bg-secondary text-center px-lg-2 px-1">
                        <button type="submit" form="item-store-form" class="btn btn-success text-white">Add</button>
                        <button type="button" class="btn btn-primary text-white" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $(function() {
        $('#item-image').change(function() {
            $('#img_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0]);
        })

        $('#item-store').click(function() {
            $('#item-store-form').submit()
        })

        $('#item-store-form').validate({
            ignore: [],
            errorElement: "table",
            errorClass: "error-help-block",
            rules: {
                name: {
                    required: true,
                },
                price: {
                    required: true,
                },
                image: {
                    required: true,
                },
            },
            messages: {
                name: {
                    required: "Name is Required."
                },
                price: {
                    required: "Price is Required."
                },
            }
        });
    })

</script>