<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\DeliveryOrder;
use App\Models\GiftItem;
use Illuminate\Support\Facades\File as FacadesFile;

class FileController extends Controller
{
    public function show($model, $id)
    {
        if (!request()->has('path')) {
            switch ($model) {
                case 'DeliveryOrder':
                    $query = DeliveryOrder::find($id);
                    $path  = $query->giftItem->image;
                    break;

                case 'GiftItem':
                    $path = GiftItem::find($id)->image;
                    break;

                case 'Banner':
                    $path = Banner::find($id)->image;
                    break;

                default:
                    # code...
                    break;
            }
        } else {
            $path = request('path');
        }

        $path = storage_path("app/" . $path);

        if (!FacadesFile::exists($path)) {
            abort(404);
        }

        // show pdf file
        // if (pathinfo($path, PATHINFO_EXTENSION) == 'pdf') {
        //     return Response::make(file_get_contents($path), 200, [
        //         'Content-Type' => 'application/pdf',
        //         'Content-Disposition' => 'inline; filename="' . $file_name . '"'
        //     ]);
        // }

        return response()->file($path);
    }
}
