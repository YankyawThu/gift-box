<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class SettingUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'logo_image' => 'nullable|image|file|max:' . config('filesystems.imageSizeLimit'),
            'one_rmb_to_coin_num' => 'required|numeric|gte:0',
            'recovery_discount' => 'required|numeric|gte:0',
            'hot_box_banner' => 'nullable|image|file|max:' . config('filesystems.imageSizeLimit'),
            'cheap_box_banner' => 'nullable|image|file|max:' . config('filesystems.imageSizeLimit'),
            'service_number' => 'nullable|image|file|max:' . config('filesystems.imageSizeLimit'),
            'service_qrcode' => 'nullable|image|file|max:' . config('filesystems.imageSizeLimit'),
            'retail_1' => 'nullable',
            'retail_2' => 'nullable',
            'retail_3' => 'nullable',
            'kou' => 'nullable',

        ];
    }
}
