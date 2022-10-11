<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\GiftBox;
use Faker\Generator as Faker;

$factory->define(GiftBox::class, function (Faker $faker) {
    return [
        'category_id' => function () {
            return App\Models\BoxCategory::inRandomOrder()->first()->id;
        },
        'name' => $faker->name,
        'image' => $faker->imageUrl($width = 640, $height = 480, 'cats', true, 'Faker', true),
        'price' => $faker->randomNumber(2),
    ];
});
