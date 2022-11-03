<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DeliveryOrder;
use App\Models\GiftItem;
use Illuminate\Support\Facades\File as FacadesFile;

class FileController extends Controller
{
    public function show($model, $id)
    {
        switch ($model) {
            case 'DeliveryOrder':
                $query = DeliveryOrder::find($id);
                $file  = $query->giftItem;
                break;

            case 'GiftItem':
                $file = GiftItem::find($id);
                break;

            default:
                # code...
                break;
        }
        $path = storage_path("app/" . $file->image);

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
