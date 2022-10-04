<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\GiftLog;
use Faker\Generator as Faker;

$factory->define(GiftLog::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return App\User::inRandomOrder()->first()->id;
        },
        'gift_item_box_id' => function () {
            return App\Models\GiftItemBox::inRandomOrder()->first()->id;
        },
        'times' => $faker->randomElement([1, 2, 3, 4, 5]),
    ];
});
