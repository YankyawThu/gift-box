<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            [
                [
                    'name' => 'client',
                    'nickname' => 'client',
                    'email' => 'client@gmail.com',
                    'password' => Hash::make('12345'),
                    'phone' => '+959123123123',
                    'gender' => 1,
                    'level' => 1,
                    'status' => 'active',
                    'created_at' => now(),
                ],
            ]
        );
    }
}
