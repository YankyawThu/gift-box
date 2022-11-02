<?php

use Illuminate\Database\Seeder;

class GiftPrizeRecordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many gift prize do you need ?', 5);

        $this->command->info("Creating {$count} gift prize .");

        $genres = factory(App\Models\GiftPrizeRecord::class, $count)->create();

        $this->command->info('Gift prize created!');
    }
}
