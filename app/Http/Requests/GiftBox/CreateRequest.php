<?php

namespace App\Http\Requests\GiftBox;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
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
            'categoryId' => 'required',
            'name' => 'required',
            'price' => 'numeric|required',
            'image' => 'required|image|file|max:' . config('filesystems.imageSizeLimit'),
            'sort' => 'nullable|numeric',
            'is_hot' => 'required|boolean',
            'is_cheap' => 'required|boolean',
        ];
    }
}
