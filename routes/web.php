<?php

use App\Http\Controllers\UI\MoneyRecordController;
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
            Route::post('/{id}/open-box', [UIController::class, 'openLuckyBox']);
            Route::post('/collect', [UIController::class, 'collect']);
        });
        Route::get('/tide-play', [UIController::class, 'tidePlay']);
        Route::get('/helps', [UIController::class, 'helps']);
        Route::get('/recharge', [RechargeController::class, 'index']);
        Route::post('/recharge-order', [RechargeController::class, 'rechargeOrder']);
        Route::get('/shipping/{num}', [OrderController::class, 'index']);
        Route::get('/order-list', [OrderController::class, 'getAll']);

        Route::prefix('user')->group(function () {
            Route::get('/', [UserController::class, 'index']);

            Route::get('/collection', [UserController::class, 'collectionIndex']);
            Route::get('/collection/get', [UserController::class, 'getCollection']);
            Route::delete('/collection/{id}/cancel', [UserController::class, 'cancelCollection']);

            Route::post('/change-avatar', [UserController::class, 'changeAvatar'])->name('change-avatar');
            Route::post('/change-nickname', [UserController::class, 'changeNickname']);
            Route::post('/change-gender', [UserController::class, 'changeGender']);
            Route::post('/change-username', [UserController::class, 'changeUserName']);
            Route::post('/change-phone', [UserController::class, 'changePhone']);
            Route::post('/change-password', [UserController::class, 'changePassword']);

            Route::get('/balance', [MoneyRecordController::class, 'index']);
            Route::get('/balance/get', [MoneyRecordController::class, 'getMyBalance']);
            Route::get('/box-cabinet', [UIController::class, 'getBoxCabinet']);
            Route::resource('shipping-address', ShippingAddressController::class);
            Route::get('/set-up', [UserController::class, 'setUp']);
            Route::any('money-to-coin', [UserController::class, 'moneyToCoin']);
        });
        Route::post('/recycle', [UIController::class, 'savePrizeRecycle']);
        Route::post('/shipment-apply', [UIController::class, 'shipmentApply']);
    });
});
