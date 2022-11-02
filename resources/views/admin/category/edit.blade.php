<div class="modal fade" data-backdrop="static" id="edit-category-modal" tabindex="-1" role="dialog"
    aria-labelledby="edit-category-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card shadow border-0">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Update Box Category') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.category.update', $id) }}" method="POST"
                            id="category-update-form">
                            @csrf
                            @method('PUT')
                            <input type="text" name="id" id="id" hidden>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="example-search-input" class="form-control-label">Name</label>
                                        <input type="text" placeholder="Name" id="name" name="name"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer bg-secondary text-center px-lg-2 px-1">
                        <button type="submit" form="category-update-form"
                            class="btn btn-success text-white">Update</button>
                        <button type="button" id="edit-category-cancel-btn" class="btn btn-primary text-white"
                            data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
