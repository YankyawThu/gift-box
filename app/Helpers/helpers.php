<?php

use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/*
 * Upload File To Akoneya Media
 */
if (!function_exists('fileUploadToAkoneyaMedia')) {
    function fileUploadToAkoneyaMedia($file, $directoryName)
    {
        $fileExtension = $file->getClientOriginalExtension();

        $fileName = time().Str::random(6).'.'.$fileExtension;

        $filePath = $directoryName.'/'.$fileName;

        if (Storage::put($filePath, file_get_contents($file->getRealPath()))) {
            return $filePath;
        }

        return null;
    }
}

/*
 * Delete File From Akoneya Media
 */

if (!function_exists('deleteFileFromAkoneyaMedia')) {
    function deleteFileFromAkoneyaMedia($filePath)
    {
        Storage::delete($filePath);
    }
}

/*
 * Get Fiel URL from Akoneya Medai
 */
if (!function_exists('getFileUrlFromAkoneyaMedia')) {
    function getFileUrlFromAkoneyaMedia($filePath)
    {
        return Storage::url($filePath);
    }
}

/*
 * Get Fiel URL from Akoneya Media
 */
if (!function_exists('getImageFromAkoneyaMedia')) {
    function getImageFromAkoneyaMedia($filePath)
    {
        return Storage::url($filePath);
        // $content = file_get_contents($fileUrl);
        // return $content;
    }
}

