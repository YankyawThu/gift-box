<?php

use Illuminate\Database\Seeder;

class CollectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many collection record do you need ?', 5);

        $this->command->info("Creating {$count} collection record ...");

        factory(App\Models\Collection::class, $count)->create();

        $this->command->info('Created!');
    }
}
