<div class="modal fade" data-backdrop="static" id="recycle-modal" tabindex="-1" role="dialog"
    aria-labelledby="recycle-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card shadow border-0">
                    <div class="card-header text-left">
                        <h3 class="mb-0">Are you confirm?</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.recycle-orders.update', $id) }}" method="POST" id='recycle-model'>
                            @csrf
                            @method('PUT')
                            <input type="hidden" name="id" id="id">
                        </form>
                        <p class="mb-0">Are you sure you want to confirm this item?</p>
                    </div>
                    <div class="card-footer bg-secondary text-center px-lg-2 px-1">
                        <button type="submit" form="recycle-model" class="btn btn-success text-white">Approve</a>
                            <button type="button" class="btn btn-primary text-white"
                                data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
