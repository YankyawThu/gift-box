<?php

namespace App\Http\Requests\GiftItem;

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
            'name' => 'required',
            'buy_price' => 'numeric|required',
            'sell_price' => 'numeric|required',
            'qty' => 'numeric|required',
            'image' => 'required|image|file|max:'.config('filesystems.imageSizeLimit'),
            'delivery_fee' => 'required|numeric|min:0',
            'status' => 'required',
        ];
    }
}
