<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\GiftItem;
use Faker\Generator as Faker;

$factory->define(GiftItem::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'image' => $faker->imageUrl($width = 640, $height = 480, 'cats', true, 'Faker', true),
        'price' => $faker->randomNumber(2),
    ];
});
