<div class="modal fade" data-backdrop="static" id="edit-box-modal" tabindex="-1" role="dialog"
    aria-labelledby="edit-box-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card shadow border-0">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Update Gift Box') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.boxes.update', $id) }}" method="POST" id="box-update-form"
                            enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <input type="text" name="id" id="id" hidden>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="categoryId" class="form-control-label">Category</label>
                                        <select class="form-select form-control form-control-alternative"
                                            aria-label="Default select example" id="categoryId" name="categoryId">
                                            @foreach ($categories as $item)
                                            <option value="{{ $item->id }}">{{ $item->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="name" class="form-control-label">Name</label>
                                        <input type="text" placeholder="Name" id="name" name="name"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="new-box-image" class="form-control-label">Image</label>
                                        <input type="file" class="form-control-file" id="new-box-image" name="new_image"
                                            id="new-box-image">
                                        <input type="text" name="image" id="image" hidden>
                                    </div>
                                </div>
                                <img src="" id="edit_box_img_url" alt="your image" width="100" height="100"
                                    class="pl-3">

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="price" class="form-control-label">Price</label>
                                        <input type="text" placeholder="Price" id="price" name="price"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="is_hot" class="form-control-label">Is Hot</label>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-secondary @if($box->is_hot)active @endif">
                                                <input type="radio" name="is_hot" value="1" id="is_hot"
                                                    autocomplete="off" checked=""> Yes
                                            </label>
                                            <label class="btn btn-secondary @if(!$box->is_hot)active @endif">
                                                <input type="radio" name="is_hot" value="0" autocomplete="off"
                                                    @if(!$box->is_hot) checked="" @endif>No
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="is_cheap" class="form-control-label">Is Cheap</label>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-secondary @if($box->is_cheap)active @endif">
                                                <input type="radio" name="is_cheap" id="is_cheap" value="1"
                                                    autocomplete="off" @if($box->is_cheap) checked="" @endif  data-id="{{$box->id}}">Yes
                                            </label>
                                            <label class="btn btn-secondary @if(!$box->is_cheap)active @endif">
                                                <input type="radio" name="is_cheap" value="0" autocomplete="off"
                                                    @if(!$box->is_cheap) checked="" @endif data-id="{{$box->id}}">No
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div class="card-footer bg-secondary text-center px-lg-2 px-1">
                        <button type="submit" form="box-update-form" class="btn btn-success text-white">Update</button>
                        <button type="button" id="edit-item-cancel-btn" class="btn btn-primary text-white"
                            data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
