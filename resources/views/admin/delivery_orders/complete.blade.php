<div class="modal fade" data-backdrop="static" id="complete-delivery-order-modal" tabindex="-1" role="dialog"
    aria-labelledby="complete-delivery-order-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card border-0 shadow">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Update Order Delivery') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.delivery-orders.update-status', [$id,'status'=>config('config.deliveryStatus.3')]) }}" method="POST"
                            id="complete-delivery-order-form">
                            @csrf
                            @method('PUT')

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="goods-name" class="form-control-label">Good Name</label>
                                        <input type="text" id="goods-name"
                                            class="form-control form-control-alternative is-valid" disabled />
                                    </div>
                                    <div class="form-group">
                                        <label for="goods_image" class="form-control-label">Goods Image</label>
                                    </div>
                                    <img src="" id="edit_img_url" alt="your image" width="100" height="100"
                                        class="pl-3">
                                    <div class="form-group">
                                        <label for="name" class="form-control-label">User Name</label>
                                        <input type="text" id="name"
                                            class="form-control form-control-alternative is-valid" disabled />
                                    </div>
                                    <div class="form-group">
                                        <label for="phone" class="form-control-label">Mobile</label>
                                        <input type="text" id="phone"
                                            class="form-control form-control-alternative is-valid" disabled />
                                    </div>
                                    <div class="form-group">
                                        <label for="address" class="form-control-label">Address</label>
                                        <input type="text" id="address"
                                            class="form-control form-control-alternative is-valid" disabled />
                                    </div>
                                    {{-- <div class="form-group">
                                        <label for="post_id" class="form-control-label">Post Name</label>
                                        <select class="form-select form-control form-control-alternative"
                                            aria-label="Select Post Name" id="post_id" name="post_id">
                                            <option value="">Select Post</option>
                                            @foreach ($posts as $post)
                                            <option value="{{ $post->id }}">
                                                {{ $post->post_name . '(' .$post->post_code . ')' }}
                                            </option>
                                            @endforeach
                                        </select>
                                    </div> --}}
                                    {{-- <div class="form-group">
                                        <label for="delivery_number" class="form-control-label">Deliver Number</label>
                                        <input type="text" id="delivery_number" name="delivery_number"
                                            class="form-control form-control-alternative is-valid" />
                                    </div> --}}
                                </div>
                            </div>
                            <input type="hidden" name="id" id="id">
                        </form>
                    </div>
                    <div class="card-footer bg-secondary px-lg-2 px-1 text-center">
                        <button type="submit" form="complete-delivery-order-form" class="btn btn-success text-white">Complete
                            Delivery</button>

                        <button type="button" id="edit-delivery-order-cancel-btn" class="btn btn-primary text-white"
                            data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
