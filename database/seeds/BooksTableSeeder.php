<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Book;
use Illuminate\Database\Seeder;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Book::class, 150)->create();
    }
}
