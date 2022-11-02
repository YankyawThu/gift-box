<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\GiftItem;
use Faker\Generator as Faker;

$factory->define(GiftItem::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'image' => 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/file-types/image/raster/tiff-file/thumbnail.jpeg',
        'price' => $faker->randomNumber(2),
        'qty' => $faker->randomDigit(),
    ];
});
