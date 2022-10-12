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
        $fileExtension = $file->extension();
        $fileName = time().Str::random(10).".$fileExtension";
        $filePath = Storage::putFileAs($directoryName, new File($file), $fileName);

        return $filePath;
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
