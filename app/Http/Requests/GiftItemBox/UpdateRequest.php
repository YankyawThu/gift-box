<?php

namespace App\Http\Requests\GiftItemBox;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'giftItemId' => ['required', Rule::unique('gift_item_boxes', 'gift_item_id')->where(function ($query) {
                return $query->where('gift_box_id', request()->giftBoxId);
            })->ignore(request()->id)],
            'probability' => 'required|numeric|gte:0',
        ];
    }

    /**
    * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'giftItemId.unique' => 'Gift Item name is already existed.',
            'giftItemId.required' => 'Gift Item name is required.',
            'probability.required' => 'Probability field is required',
        ];
    }
}
