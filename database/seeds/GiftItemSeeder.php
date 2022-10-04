<?php

use Illuminate\Database\Seeder;

class GiftItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many gift item do you need ?', 10);

        $this->command->info("Creating {$count} gift item .");

        $genres = factory(App\Models\GiftItem::class, $count)->create();

        $this->command->info('Gift item created!');
    }
}
