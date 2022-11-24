<div class="modal fade" data-backdrop="static" id="recharge-order-paid" tabindex="-1" role="dialog"
    aria-labelledby="recharge-order-paid" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card border-0 shadow">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Confirm Payment') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.recharge-orders.update', [$id,'status'=>config('config.rechargePayStatus.2')]) }}" method="POST"
                            id="recharge-order-paid-form">
                            @csrf
                            @method('PUT')
                            <input type="text" name="id" id="id" hidden>
                            <div class="row">
                                <div class="col-md-12">

                                    <div class="form-group">
                                        <label for="goods_image" class="form-control-label">Voucher</label>
                                    </div>
                                    <div class="form-group text-center">
                                        <img src="" id="voucher" alt="your image" width="400px" height="400px"
                                        class="pl-3">
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer bg-secondary px-lg-2 px-1 text-center">
                        <button type="submit" form="recharge-order-paid-form" class="btn btn-success text-white">Paid</button>

                        <button type="button" id="edit-delivery-order-cancel-btn" class="btn btn-primary text-white"
                            data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
