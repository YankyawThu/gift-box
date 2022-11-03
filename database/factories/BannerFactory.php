<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Banner;
use Faker\Generator as Faker;

$factory->define(Banner::class, function (Faker $faker) {
    return [
        'image' => $faker->imageUrl($width = 640, $height = 480, 'cats', true, 'Faker', true),
        'value' => $faker->text,
    ];
});
