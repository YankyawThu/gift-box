<?php

use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many record do you need ?', 5);

        $this->command->info("Creating {$count} record ...");

        factory(App\Models\Address::class, $count)->create();

        $this->command->info('Created!');
    }
}
