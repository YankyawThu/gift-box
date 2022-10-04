<?php

use Illuminate\Database\Seeder;

class GiftLogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many gift log do you need ?', 10);

        $this->command->info("Creating {$count} gift log .");

        $genres = factory(App\Models\GiftLog::class, $count)->create();

        $this->command->info('Gift log created!');
    }
}
