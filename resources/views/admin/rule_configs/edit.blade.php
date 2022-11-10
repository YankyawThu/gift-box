<div class="modal fade" data-backdrop="static" id="edit-policy-modal" tabindex="-1" role="dialog"
    aria-labelledby="edit-policy-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card border-0 shadow">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Update Protocol Policy') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.rule-policies.update', $id) }}" method="POST"
                            id="edit-policy-form" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <input type="text" name="id" id="id" hidden>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="policy_category_id" class="form-control-label">Type</label>
                                        <input type="text" placeholder="Type" id="policy_category_id"
                                            class="form-control form-control-alternative is-valid" readonly />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="header" class="form-control-label">Title</label>
                                        <input type="text" placeholder="Enter Title" id="header" name="header"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group" id="edit-ck-editor">
                                        <label for="description" class="form-control-label">Description</label>
                                        <textarea name="description"
                                            class="form-control form-control-alternative is-valid" id="description"
                                            cols="30" rows="10"></textarea>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group" id="radio-edit">
                                        <label for="option1" class="form-control-label">Status</label>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-secondary form-control-label">
                                                <input type="radio" name="public_status" id="public_status1" value="1"
                                                    autocomplete="off">
                                                Online
                                            </label>
                                            <label class="btn btn-secondary ">
                                                <input type="radio" name="public_status" id="public_status0" value="0"
                                                    autocomplete="off">
                                                Offline
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="card-footer bg-secondary px-lg-2 px-1 text-center">
                        <button type="submit" form="edit-policy-form" class="btn btn-success text-white">Update</button>
                        <button type="button" id="edit-policy-cancel-btn" class="btn btn-primary text-white"
                            data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
