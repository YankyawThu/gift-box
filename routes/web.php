<?php

use App\Http\Controllers\UI\IndexController;
use App\Http\Controllers\UI\OrderController;
use App\Http\Controllers\UI\RechargeController;
use App\Http\Controllers\UI\UIController;
use App\Http\Controllers\UI\UserController;
use Illuminate\Support\Facades\Auth;
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

// Auth Routes
Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::group(['namespace' => 'UI'], function () {
        Route::get('/banner', [UIController::class, 'getBanners']);
        Route::prefix('box')->group(function () {
            Route::get('/', [UIController::class, 'index'])->name('home');
            Route::post('/', [UIController::class, 'getAll']);
            Route::get('/{id}', [UIController::class, 'detail']);
            Route::get('/{id}/open/{time}', [UIController::class, 'boxOpen']);
            Route::post('/{id}/create-order/{num}', [UIController::class, 'createOrder']);
            Route::post('/open-box', [UIController::class, 'openLuckyBox']);
            Route::post('/collect', [UIController::class, 'collect']);
        });
        Route::get('/helps', [IndexController::class, 'helps']);
        Route::get('/recharge', [RechargeController::class, 'index']);
        Route::post('/recharge-order', [RechargeController::class, 'rechargeOrder']);
        Route::get('/order-list', [OrderController::class, 'index']);

        Route::resource('shipping-address', ShippingAddressController::class);
        Route::prefix('user')->group(function () {
            Route::post('/change-avatar', [UserController::class, 'changeAvatar'])->name('change-avatar');
            Route::post('/change-nickname', [UserController::class, 'changeNickname']);
            Route::get('/collection', [UserController::class, 'getCollection']);
            Route::delete('/collection/{id}/cancel', [UserController::class, 'cancelCollection']);
        });
        // Route::get('/test', function () {
        //     return view('ui.home');
        // });
    });
});
