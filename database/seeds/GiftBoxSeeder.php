<?php

use Illuminate\Database\Seeder;

class GiftBoxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many gift box do you need ?', 10);

        $this->command->info("Creating {$count} gift box .");

        $genres = factory(App\Models\GiftBox::class, $count)->create();

        $this->command->info('Gift box created!');
    }
}
