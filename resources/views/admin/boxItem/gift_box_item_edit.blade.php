<div class="modal fade" data-backdrop="static" id="edit-gbox-modal" tabindex="-1" role="dialog"
    aria-labelledby="edit-box-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card shadow border-0">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Update Gift Item Box') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.itemBoxes.detailUpdate', $id) }}" method="POST"
                            id="gbox-update-form" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <input type="text" name="id" id="id" hidden>
                            <input type="text" name="giftBoxId" id="giftBoxId" hidden>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="giftItemId" class="form-control-label">Item Name</label>
                                        <select class="form-select form-control form-control-alternative"
                                            aria-label="Default select example" id="giftItemId" name="giftItemId">
                                            @foreach ($items as $item)
                                            <option value="{{ $item->id }}">{{ $item->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="probability" class="form-control-label">probability</label>
                                        <input type="text" placeholder="probability" name="probability" id="probability"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="card-footer bg-secondary text-center px-lg-2 px-1">
                        <button type="submit" form="gbox-update-form" class="btn btn-success text-white">Update</button>
                        <button type="button" id="edit-gbox-cancel-btn" class="btn btn-primary text-white"
                            data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
