<?php

namespace App\Http\Requests\GiftItem;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'name' => 'required',
            'price' => 'numeric|required',
            'qty' => 'numeric|required',
            // 'image' => 'nullable|image|file|max:' . config('filesystems.imageSizeLimit'),
            'delivery_fee' => 'required|numeric|min:0',
            'status' => 'required'
        ];
    }
}
