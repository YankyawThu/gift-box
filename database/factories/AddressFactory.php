<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Address;
use Faker\Generator as Faker;

$factory->define(Address::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return App\User::inRandomOrder()->first()->id;
        },
        'phone' => $faker->phoneNumber,
        'township_id' => function () {
            return App\Models\Township::inRandomOrder()->first()->id;
        },
        'address' => $faker->address,
    ];
});
