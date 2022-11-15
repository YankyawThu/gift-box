<div class="modal fade" data-backdrop="static" id="add-form" tabindex="-1" role="dialog" aria-labelledby="add-form"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card shadow border-0">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Add Gift Item') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.items.store') }}" method="POST" id="item-store-form"
                            enctype="multipart/form-data">
                            @csrf
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="name" class="form-control-label">Name</label>
                                        <input type="text" placeholder="Name" name="name" id="name"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="" class="form-control-label">Image</label>
                                        <input type="file" class="form-control-file" name="image" id="item-image">
                                    </div>
                                </div>
                                <img src="{{ asset('image/default.png') }}" id="img_url" alt="your image" width="100"
                                    height="100" class="pl-3">

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="price" class="form-control-label">Buy Price</label>
                                        <input type="text" placeholder="Buy Price" name="buy_price" id="buy_price" value="0"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="price" class="form-control-label">Sell Price</label>
                                        <input type="text" placeholder="Sell Price" name="sell_price" id="sell_price" value="0"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="qty" class="form-control-label">Qty</label>
                                        <input type="number" placeholder="Qty" name="qty" id="qty" value="0"
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
                                                    autocomplete="off" checked=""> Online
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
                        <button type="submit" form="item-store-form" class="btn btn-success text-white">Add</button>
                        <button type="button" class="btn btn-primary text-white" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
