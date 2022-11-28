<?php

return [
    // key => value
    'payMethod' => [
        [
            'id' => '1',
            'name' => 'KPay',
        ],
        [
            'id' => '2',
            'name' => 'WavePay',
        ],
    ],
    'rechargePayMethod' => [
        1 => 'KPay',
        2 => 'WavePay',
    ],
    'rechargePayStatus' => [
        1 => 'pending',
        2 => 'paid',
    ],
    'payStatus' => [
        '1' => 'Pay',
        '2' => 'Unpay',
    ],
    'deliveryStatus' => [
        '1' => 'undelivered',
        '2' => 'unreceived',
        '3' => 'finished',
        '4' => 'unpay',
    ],
    'bannerType' => [
        '1' => 'box',
        '2' => 'link',
        '3' => 'word',
    ],
    'bannerStatus' => [
        '1' => 'normal',
        '2' => 'hidden',
    ],
    'bannerPlace' => [
        '1' => 'index',
        '2' => 'other',
    ],
    'prizeStatus' => [
        1 => 'bag',
        2 => 'exchange',
        3 => 'delivery',
        4 => 'received',
    ],
];
