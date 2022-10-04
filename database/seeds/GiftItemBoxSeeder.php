<?php

use Illuminate\Database\Seeder;

class GiftItemBoxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many gift item box do you need ?', 10);

        $this->command->info("Creating {$count} gift item box.");

        $genres = factory(App\Models\GiftItemBox::class, $count)->create();

        $this->command->info('Gift item box created!');
    }
}
