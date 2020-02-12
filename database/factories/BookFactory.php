<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Book;
use App\User;
use Faker\Generator as Faker;

$factory->define(Book::class, function (Faker $faker) {
    $mount_users = User::all()->count();

    return [
        'name' => $faker->name,
        'details' => $faker->sentence($nbWords=50, $variableNbWords=true),
        'url_image' => $faker->imageUrl($width = 640, $height = 480),
        'free' => true,
        'id_author' => rand(1, $mount_users)
    ];
});
