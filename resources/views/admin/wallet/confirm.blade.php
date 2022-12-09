<div class="modal fade" data-backdrop="static" id="wallet-approved" tabindex="-1" role="dialog"
    aria-labelledby="wallet-approved" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card border-0 shadow">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Confirm Payment') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.wallet.update', 0) }}" method="POST"
                            id="wallet-approved-form">
                            @csrf
                            @method('PUT')
                            <input type="text" name="id" id="id" hidden>

                            <div class="row">
                                <p class="mb-0">Are you sure you want to approve?</p>
                            </div>

                        </form>
                    </div>
                    <div class="card-footer bg-secondary text-center px-lg-2 px-1">
                        <button type="submit" form="wallet-approved-form" class="btn btn-success text-white">Confirm</a>
                            <button type="button" class="btn btn-primary text-white"
                                data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
