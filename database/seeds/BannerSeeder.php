<?php

use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many banners do you need ?', 5);

        $this->command->info("Creating {$count} banners .");

        $genres = factory(App\Models\Banner::class, $count)->create();

        $this->command->info('Banner created!');
    }
}
