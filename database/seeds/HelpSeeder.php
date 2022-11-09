<?php

use Illuminate\Database\Seeder;

class HelpSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rule_configurations')->insert(
            [
                [
                    'policy_category_id' => 8,
                    'header' => 'How to buy Blind Box?',
                    'description' => 'Choose your favorite blind box, enter the blind box details page, clickClick [One Shot Into the Soul] or [Five Peerless]',
                ],
                [
                    'policy_category_id' => 8,
                    'header' => 'Where can I find the products in the blind box?',
                    'description' => 'Check it in the personal center [My Box Cabinet].',
                ],
                [
                    'policy_category_id' => 8,
                    'header' => 'What should I do if I don\'t like the products in the blind box?',
                    'description' => 'Select the products you don\'t like in the box cabinet and click Recycle.Refund the balance, the balance can continue to buy.',
                ],
                [
                    'policy_category_id' => 8,
                    'header' => 'About the introduction of pre-sale products.',
                    'description' => 'Pre-sale products are subject to the actual delivery time, the time of delivery or
                    The delay of uncontrollable factors such as the brand side is normal.
                    The platform does not accept such complaints. Those who mind carefully choose to buy.',
                ],
                [
                    'policy_category_id' => 8,
                    'header' => 'Can the purchased blind box be replaced by other styles?',
                    'description' => 'The platform does not currently support exchange services.',
                ],
                [
                    'policy_category_id' => 8,
                    'header' => 'Does the product support return or exchange?',
                    'description' => 'Due to the characteristics of the blind box, once the product is sold, it is not a major quality issue.The question does not support unreasonable returns.',
                ],
            ]
        );
    }
}
