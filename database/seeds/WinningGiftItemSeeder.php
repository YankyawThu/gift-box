<?php

use Illuminate\Database\Seeder;

class WinningGiftItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many winning gift item do you need ?', 10);

        $this->command->info("Creating {$count} winning gift item.");

        $genres = factory(App\Models\WinningGiftItem::class, $count)->create();

        $this->command->info('Winning gift item created!');
    }
}
