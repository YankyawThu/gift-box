<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\BoxCategory;
use Faker\Generator as Faker;

$factory->define(BoxCategory::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});
