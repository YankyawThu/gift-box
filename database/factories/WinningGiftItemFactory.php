<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\WinningGiftItem;
use Faker\Generator as Faker;

$factory->define(WinningGiftItem::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return App\User::inRandomOrder()->first()->id;
        },
        'gift_item_id' => function () {
            return App\Models\GiftItem::inRandomOrder()->first()->id;
        },
    ];
});
