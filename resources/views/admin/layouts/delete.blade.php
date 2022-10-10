<div class="modal fade" data-backdrop="static" id="delete-form" tabindex="-1" role="dialog" aria-labelledby="delete-form" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="card shadow border-0"> 
                    <div class="card-header text-left">
                        <h3 class="mb-0">{{ __('Delete Gift Item') }}</h3>
                    </div>
                    <div class="card-body bg-secondary">
                        <form action="{{ route($route,$id) }}" method="DELETE" id="delete-form">
                            @csrf
                            {{-- {{$id}} --}}
                            {{-- <input type="text" value="" name="id" id="id"> --}}
                            @php
                                $htmlEle = "<input type='text' value='' name='id' id='id'>";
                                echo $htmlEle;
                                $domdoc = new DOMDocument();
                                $domdoc->loadHTML($htmlEle);
                                $xp = new DOMXpath($domdoc);
                                $nodes = $xp->query('//input[@name="id"]/attribute::value');
                                echo $node = $nodes->item(0)->nodeValue;
                                // echo $node->getAttribute('value');
                                // echo $domdoc->getElementById('id')->value;
                            @endphp
                        </form>
                    </div>
                    <div class="card-footer bg-secondary text-center px-lg-2 px-1">
                        <button type="submit" form="delete-form" class="btn btn-success text-white">Delete</a>
                        <button type="button" class="btn btn-primary text-white" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>