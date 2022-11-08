<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\GiftPrizeRecord;
use Faker\Generator as Faker;

$factory->define(GiftPrizeRecord::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return App\User::inRandomOrder()->first()->id;
        },
        'gift_log_id' => function () {
            return App\Models\GiftLog::inRandomOrder()->first()->id;
        },
        'gift_item_id' => function () {
            return App\Models\GiftItem::inRandomOrder()->first()->id;
        },
        'status' => $faker->randomElement(['bag', 'exchange', 'delivery', 'received']),
    ];
});
