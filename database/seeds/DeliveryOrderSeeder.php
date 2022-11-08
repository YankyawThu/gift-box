<?php

use Illuminate\Database\Seeder;

class DeliveryOrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many delivery order do you need ?', 10);

        $this->command->info("Creating {$count} record ...");

        factory(App\Models\DeliveryOrder::class, $count)->create();

        $this->command->info('Created!');
    }
}
