<div class="modal fade" data-backdrop="static" id="edit-item-modal" tabindex="-1" role="dialog"
    aria-labelledby="edit-item-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card shadow border-0">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Update Gift Item') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.items.update', $id) }}" method="POST" id="item-update-form"
                            enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <input type="text" name="id" id="id" hidden>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="name" class="form-control-label">Name</label>
                                        <input type="text" placeholder="Name" id="name" name="name"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="new-item-image" class="form-control-label">Image</label>
                                        <input type="file" class="form-control-file" id="new-item-image"
                                            name="new_image" id="new-item-image">
                                        <input type="text" name="image" id="image" hidden>
                                    </div>
                                </div>
                                <img src="" id="edit_item_img_url" alt="your image" width="100" height="100"
                                    class="pl-3">

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="price" class="form-control-label">Price</label>
                                        <input type="text" placeholder="Price" id="price" name="price"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="qty" class="form-control-label">Qty</label>
                                        <input type="number" placeholder="Qty" id="qty" name="qty"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="delivery_fee" class="form-control-label">Delivery
                                            Fee</label>
                                        <input type="number" placeholder="Delivery Fee" name="delivery_fee" value="0"
                                            id="delivery_fee" class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="option1" class="form-control-label">Status</label>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-secondary active">
                                                <input type="radio" name="status" value="online" id="option1"
                                                    autocomplete="off">
                                                Online
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" name="status" value="offline" id="option2"
                                                    autocomplete="off">
                                                Offline
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="card-footer bg-secondary text-center px-lg-2 px-1">
                        <button type="submit" form="item-update-form" class="btn btn-success text-white">Update</button>
                        <button type="button" id="edit-item-cancel-btn" class="btn btn-primary text-white"
                            data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
