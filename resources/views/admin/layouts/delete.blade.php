<div class="modal fade" data-backdrop="static" id="delete-modal" tabindex="-1" role="dialog" aria-labelledby="delete-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card shadow border-0"> 
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Delete Gift Item') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route($route, $id) }}" method="POST" id='delete-row'>
                            @csrf
                            @method('DELETE')
                            <input type="text" name="id" id="id" hidden>
                        </form>
                        <p class="mb-0">Are you sure you want to delete this item?</p>
                    </div>
                    <div class="card-footer bg-secondary text-center px-lg-2 px-1">
                        <button type="submit" form="delete-row" class="btn btn-success text-white">Delete</a>
                        <button type="button" class="btn btn-primary text-white" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>