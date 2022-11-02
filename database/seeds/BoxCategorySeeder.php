<?php

use Illuminate\Database\Seeder;

class BoxCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many category do you need ?', 10);

        $this->command->info("Creating {$count} category .");

        $genres = factory(App\Models\BoxCategory::class, $count)->create();

        $this->command->info('Box category created!');
    }
}
