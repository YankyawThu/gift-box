<?php

use Illuminate\Database\Seeder;

class MoneyRecordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many money record do you need ?', 5);

        $this->command->info("Creating {$count} money record .");

        $genres = factory(App\Models\MoneyRecord::class, $count)->create();

        $this->command->info('Money record created!');
    }
}
