<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Models\Collection;
use Faker\Generator as Faker;

$factory->define(Collection::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return App\User::inRandomOrder()->first()->id;
        },
        'gift_box_id' => function () {
            return App\Models\GiftBox::inRandomOrder()->first()->id;
        },
        'gift_item_id' => function () {
            return App\Models\GiftItem::inRandomOrder()->first()->id;
        },
    ];
});
