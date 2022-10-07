<div class="modal fade" data-backdrop="static" id="add-form" tabindex="-1" role="dialog" aria-labelledby="add-form" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="card shadow border-0"> 
            <div class="card-header text-left">
              <h3 class="mb-0">{{ __('Add Gift Item') }}</h3>
            </div>
            <div class="card-body bg-secondary">
              <form>
                  <div class="row">
                      <div class="col-md-12">
                          <div class="form-group has-success">
                                <label for="example-search-input" class="form-control-label">Name</label>
                                <input type="text" placeholder="Name" class="form-control form-control-alternative is-valid" />
                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                          </div>
                      </div>
                      <div class="col-md-12">
                            <div class="form-group has-success">
                                <label for="example-search-input" class="form-control-label">Price</label>
                                <input type="number" placeholder="Price" class="form-control form-control-alternative is-valid" />
                            </div>
                      </div>
                      <div class="col-md-12">
                            <div class="form-group">
                              <label for="" class="form-control-label">Image</label>
                              <input type="file" class="form-control-file" id="item-image">
                            </div>
                      </div>
                      <img src="{{ asset('image/default.png') }}" id="img_url" alt="your image" width="100" height="100" class="pl-3">
                  </div>
              </form>
          </div>
          <div class="card-footer bg-secondary text-center px-lg-2 px-1">
              <a type="button" class="btn btn-success text-white">Add</a>
              <a type="button" class="btn btn-primary text-white" data-dismiss="modal">Cancel</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
    $(function() {
        $('#item-image').change(function() {
            $('#img_url')[0].src = (window.URL ? URL : webkitURL).createObjectURL(this.files[0]);
        })
    })

</script>