<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\GiftItemBox;
use Faker\Generator as Faker;

$factory->define(GiftItemBox::class, function (Faker $faker) {
    return [
        'gift_box_id' => function () {
            return App\Models\GiftBox::inRandomOrder()->first()->id;
        },
        'gift_item_id' => function () {
            return App\Models\GiftItem::inRandomOrder()->first()->id;
        },
        'probability' => $faker->randomNumber(2),
    ];
});
