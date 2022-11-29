<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserTableSeeder::class);
        // $this->call(BoxCategorySeeder::class);
        // $this->call(GiftBoxSeeder::class);
        // $this->call(GiftItemSeeder::class);
        // $this->call(GiftItemBoxSeeder::class);
        // $this->call(GiftLogSeeder::class);
        // $this->call(AdminSeeder::class);
        // $this->call(RechargeListSeeder::class);
        $this->call(TownshipSeeder::class);
        // $this->call(AddressSeeder::class);
        // $this->call(GiftPrizeRecordSeeder::class);
        // $this->call(DeliveryOrderSeeder::class);
        // $this->call(CustomSqlSeeder::class);
        // $this->call(BannerSeeder::class);
        // $this->call(MoneyRecordSeeder::class);
        $this->call(HelpSeeder::class);
    }
}
