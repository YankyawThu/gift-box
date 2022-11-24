<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class BannerCreateRequest extends FormRequest
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
            'image' => 'required|image|file|max:'.config('filesystems.imageSizeLimit'),
            'type' => 'required',
            // 'value_box' => 'required_if:type,1',
            // 'value_link' => 'required_if:type,2|url',
            'value' => 'nullable',
            'status' => 'required',
            'sort' => 'nullable|numeric',
        ];
    }
}
