<div class="modal fade" data-backdrop="static" id="add-form" tabindex="-1" role="dialog" aria-labelledby="add-form"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card shadow border-0">
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Add Gift Box') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route('admin.boxes.store') }}" method="POST" id="box-store-form"
                            enctype="multipart/form-data">
                            @csrf
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="categoryId" class="form-control-label">Category</label>
                                        <select class="form-select form-control form-control-alternative"
                                            aria-label="Default select example" name="categoryId" name="categoryId">
                                            <option value="" selected>Select Category</option>
                                            @foreach ($categories as $item)
                                            <option value="{{$item->id}}">{{$item->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="name" class="form-control-label">Name</label>
                                        <input type="text" placeholder="Name" name="name" id="name"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="" class="box-image">Image</label>
                                        <input type="file" class="form-control-file" name="image" id="box-image">
                                    </div>
                                </div>
                                <img src="{{ asset('image/default.png') }}" id="box_img_url" alt="your image"
                                    width="100" height="100" class="pl-3">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="price" class="form-control-label">Price</label>
                                        <input type="text" placeholder="Price" name="price" id="price"
                                            class="form-control form-control-alternative is-valid" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="is_hot" class="form-control-label">Is Hot</label>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-secondary active">
                                                <input type="radio" name="is_hot" value="1" id="is_hot"
                                                    autocomplete="off" checked="">Yes
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" name="is_hot" value="0" autocomplete="off">No
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="is_cheap" class="form-control-label">Is Cheap</label>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-secondary active">
                                                <input type="radio" name="is_cheap" value="1" id="is_cheap"
                                                    autocomplete="off" checked=""> Yes
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" name="is_cheap" value="0" autocomplete="off">No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer bg-secondary text-center px-lg-2 px-1">
                        <button type="submit" form="box-store-form" class="btn btn-success text-white">Add</button>
                        <button type="button" class="btn btn-primary text-white" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
