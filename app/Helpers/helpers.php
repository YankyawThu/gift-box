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

if (!function_exists('activeSegment')) {
    function activeSegment($index, $path)
    {
        return request()->segment($index) == $path ? 'active' : '';
    }
}

if (!function_exists('activePath')) {
    function activePath($path = null)
    {
        $path = is_null($path)
            ? config('app.admin_prefix')
            : config('app.admin_prefix').'/'.$path;

        return request()->is($path) ? 'active' : '';
    }
}

if (!function_exists('showSegment')) {
    function showSegment($index, $path)
    {
        return request()->segment($index) == $path ? 'show' : '';
    }
}

if (!function_exists('splitDaterange')) {
    function splitDaterange($date)
    {
        if (!$date) {
            return null;
        }

        $date = explode(' - ', $date);
        $from = $date[0];
        $to = $date[1];
        $from = str_replace('/', '-', $from);
        $to = str_replace('/', '-', $to);

        return ['from' => $from, 'to' => $to];
    }
}

if (!function_exists('dateFormat')) {
    function dateFormat($date)
    {
        return date('Y-m-d,H:m:s', strtotime($date));
    }
}
if (!function_exists('getRmbFromCoin')) {
    function getRmbFromCoin(float $coin)
    {
        if (empty($coin)) {
            return 0;
        }
        $data = App\Models\Setting::where('id', 1)->value('one_rmb_to_coin_num');
        $rate = $data ? $data : 1.00;

        return round($coin / $rate, 5);
    }
}
if (!function_exists('getSetting')) {
    function getSetting($name)
    {
        $allow = ['logo_iamge', 'one_rmb_to_coin_num', 'hot_box_banner', 'cheap_box_banner', 'recovery_discount', 'service_number', 'service_qrcode'];
        if (!in_array($name, $allow)) {
            return '';
        }

        return App\Models\Setting::where('id', 1)->value($name);
    }
}
if (!function_exists('getCoinFromRmb')) {
    function getCoinFromRmb(float $rmb)
    {
        if (empty($rmb)) {
            return 0;
        }
        $rate = App\Models\Setting::where('id', 1)->value('one_rmb_to_coin_num');

        return round($rmb * $rate, 5);
    }
}
if (!function_exists('getHelp')) {
    function getHelp($policyCatId)
    {
        return App\Models\RuleConfiguration::where('policy_category_id', $policyCatId)->get();
    }
}

if (!function_exists('translations')) {
    function translations($json)
    {
        if(!file_exists($json)) {
        return [];
        }
        return json_decode(file_get_contents($json), true);
    }
}
