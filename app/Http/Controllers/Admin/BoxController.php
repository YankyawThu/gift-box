<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\GiftBox\CreateRequest;
use App\Http\Requests\GiftBox\UpdateRequest;
use App\Services\Admin\BoxService;

class BoxController extends Controller
{
    public function __construct(BoxService $boxService)
    {
        $this->boxService = $boxService;
    }

    public function index()
    {
        $this->boxService->getAll();

        return view('admin.box.index');
    }

    public function create()
    {
    }

    public function store(CreateRequest $request)
    {
        $this->boxService->store($request);

        return redirect()->back();
    }

    public function show($id)
    {
        $this->boxService->getDetail($id);

        return;
    }

    public function edit($id)
    {
        $this->boxService->getDetail($id);

        return;
    }

    public function update(UpdateRequest $request, $id)
    {
        $this->boxService->update($request, $id);

        return;
    }

    public function destroy($id)
    {
        $this->boxService->delete($id);

        return;
    }
}
