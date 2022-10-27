<?php

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many record do you need ?', 1);

        $this->command->info("Creating {$count} record ...");

        factory(App\Models\Admin::class, $count)->create();

        $this->command->info('Created!');
    }
}
