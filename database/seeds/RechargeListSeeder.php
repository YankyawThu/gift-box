<?php

use Illuminate\Database\Seeder;

class RechargeListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = (int) $this->command->ask('How many recharge list do you need ?', 10);

        $this->command->info("Creating {$count} recharge list .");

        $genres = factory(App\Models\RechargeList::class, $count)->create();

        $this->command->info('Recharge List created!');
    }
}
