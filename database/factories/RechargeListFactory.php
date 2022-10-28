<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Models\RechargeList;
use Faker\Generator as Faker;

$factory->define(RechargeList::class, function (Faker $faker) {
    return [
        'amount' => $faker->randomDigit(),
    ];
});
