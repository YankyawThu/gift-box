<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\DeliveryOrder;
use Faker\Generator as Faker;

$factory->define(DeliveryOrder::class, function (Faker $faker) {
    return [
        'order_number' => $faker->randomNumber,
        'gift_log_id' => function () {
            return App\Models\GiftLog::inRandomOrder()->first()->id;
        },
        'user_id' => function () {
            return App\User::inRandomOrder()->first()->id;
        },
        'address_id' => function () {
            return App\Models\Address::inRandomOrder()->first()->id;
        },
        'gift_box_id' => function () {
            return App\Models\GiftBox::inRandomOrder()->first()->id;
        },
        'gift_item_id' => function () {
            return App\Models\GiftItem::inRandomOrder()->first()->id;
        },
        'gift_prize_id' => function () {
            return App\Models\GiftPrizeRecord::inRandomOrder()->first()->id;
        },
    ];
});
