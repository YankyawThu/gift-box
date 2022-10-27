<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\GiftLog;
use Faker\Generator as Faker;

$factory->define(GiftLog::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return App\User::inRandomOrder()->first()->id;
        },
        'gift_box_id' => function () {
            return App\Models\GiftBox::inRandomOrder()->first()->id;
        },
        'times' => 1,
    ];
});
