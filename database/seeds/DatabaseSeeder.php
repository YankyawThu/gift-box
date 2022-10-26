<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserTableSeeder::class);
        $this->call(BoxCategorySeeder::class);
        $this->call(GiftBoxSeeder::class);
        $this->call(GiftItemSeeder::class);
        $this->call(GiftItemBoxSeeder::class);
        $this->call(GiftLogSeeder::class);
    }
}
