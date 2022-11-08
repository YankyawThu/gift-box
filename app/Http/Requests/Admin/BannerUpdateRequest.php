<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class BannerUpdateRequest extends FormRequest
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
            'place' => 'required',
            // 'image' =>  empty(request('image')) ? 'nullable' : 'required|image|file|max:' . config('filesystems.imageSizeLimit'),
            'type' => 'required',
            'value' => 'nullable',
            'status' => 'required',
            'sort' => 'required|numeric',

        ];
    }
}
