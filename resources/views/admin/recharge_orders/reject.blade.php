<div class="modal fade" data-backdrop="static" id="recharge-order-reject" tabindex="-1" role="dialog"
    aria-labelledby="recharge-order-reject" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card border-0 shadow">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Confirm') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.recharge-orders.update', [$id,'status'=>config('config.rechargePayStatus.3'),'amount'=>$item->amount]) }}" method="POST"
                            id="recharge-order-reject-form">
                            @csrf
                            @method('PUT')
                            <div class="row">
                                <div class="col-md-12">

                                    <div class="form-group text-center">
                                        <label for="goods_image" class="form-control-label">Are you sure to reject?</label>
                                    </div>

                                </div>
                            </div>
                            <input type="hidden" name="id" id="id">
                        </form>
                    </div>
                    <div class="card-footer bg-secondary px-lg-2 px-1 text-center">
                            <button type="submit" form="recharge-order-reject-form" class="btn btn-success text-white">OK</button>

                        <button type="button" id="edit-delivery-order-cancel-btn" class="btn btn-primary text-white"
                            data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
