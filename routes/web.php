<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::group(['middleware' => 'admin'], function () {
        Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function () {
            Route::get('/', 'HomeController@index')->name('home');

            Route::resource('user', 'UserController')->only(['index']);
            Route::get('profile', ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
            Route::put('profile', ['as' => 'profile.update', 'uses' => 'ProfileController@update']);
            Route::put('profile/password', ['as' => 'profile.password', 'uses' => 'ProfileController@password']);

            Route::get('box-items', 'BoxController@allItems')->name('box_items');
            Route::resource('items', 'ItemController');
            Route::resource('boxes', 'BoxController');
            Route::resource('itemBox', 'GiftItemBoxController')->only([
                'store', 'update',
            ]);
            Route::resource('category', 'BoxCategoryController');
            Route::resource('giftLog', 'GiftLogController');
            Route::get('boxes/{id}/items', 'GiftItemBoxController@getItems')->name('gift-items');
        });
    });
});
Route::group(['namespace' => 'UI'], function () {
    Route::get('/', 'UIController@index');
    Route::post('/', 'UIController@getAll');
    Route::get('/box/{id}/tiems/{num}', 'UIController@openLuckyBox');
    // Route::get('/open-box/{id}/times/{times}', 'UIController@openBox')->name('openbox'); // testing
    // Route::get('/bind-box-open/{id}/times/{times}', 'UIController@openBlindBox')->name('openblindbox'); // testing
});
/* testing */
function randSelect($a)
{
    $values = array_values($a);

    $sum = array_sum($values);
    $rand = (rand(0, 1000) / 1000) * $sum;
    echo "rand : $rand\n";
    $partialSum = 0;

    for ($i = 0; $i < count($values); ++$i) {
        $partialSum += $values[$i];
        if ($partialSum >= $rand) {
            // return $values[$i];
            echo "value : $values[$i]";
            break;
            // incase you are using something like array_count_values and are actually looking for the keys
            // return array_keys($a)[$i];
        }
    }
}
Route::get('/test', function () {
    $a = [
        149 => 55,
        130 => 10,
        131 => 5,
        132 => 5,
        133 => 10,
        134 => 10,
        135 => 5,
      ];

    echo randSelect($a);

    // $valueWeights = [
    //     149 => 55.555,
    //     130 => 10.0050,
    //     131 => 5,
    //     132 => 5.2,
    //     133 => 10,
    //     134 => 10.24,
    //     135 => 5,
    // ];
    // $mostDecimals = 0;

    // foreach ($valueWeights as $value => $weight) {
    //     $tempDecimals = 0;
    //     while ((string) $weight !== (string) floor($weight)) {
    //         $weight *= 10;
    //         ++$tempDecimals;
    //     }
    //     $mostDecimals = max($mostDecimals, $tempDecimals);
    // }
    // echo "Most Decimals: {$mostDecimals}\n";
    // $factor = pow(10, $mostDecimals);
    // echo 'Factor: ' , $factor , "\n";
    // echo 'Array Sum:', array_sum($valueWeights);

    // $totalWeight = (array_sum($valueWeights) - 1) * $factor;

    // // for ($i = 0; $i < 10; ++$i) {
    // $rand = mt_rand(0, $totalWeight);
    // echo "\nRand: " , $rand , "\n";
    // $cumulativeScaledWeight = 0;
    // foreach ($valueWeights as $value => $weight) {
    //     $cumulativeScaledWeight += $weight * $factor;
    //     // dd($cumulativeScaledWeight);
    //     if ($rand < $cumulativeScaledWeight) {
    //         echo "Value: {$weight}\n";
    //         break;
    //     }
    // }
    // // }
});

Route::get('bind-box-open-testing', function () {
    $qty = [100, 20, 10, 1];
    $arr = [];
    foreach ($qty as $q) {
        for ($i = 1; $i <= $q; ++$i) {
            $arr[] = $i;
        }
    }

    print_r(array_rand($arr, 1));
});
/* end testing */
