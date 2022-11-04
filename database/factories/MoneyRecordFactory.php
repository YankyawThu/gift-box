<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\MoneyRecord;
use Faker\Generator as Faker;

$factory->define(MoneyRecord::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return App\User::inRandomOrder()->first()->id;
        },
        'money' => $faker->randomNumber,
    ];
});
