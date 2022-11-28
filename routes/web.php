<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\UI\MoneyRecordController;
use App\Http\Controllers\UI\OrderController;
use App\Http\Controllers\UI\RechargeController;
use App\Http\Controllers\UI\RetailController;
use App\Http\Controllers\UI\ShippingAddressController;
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

Route::get('/password/otp', [ForgotPasswordController::class, 'otpNotLogin'])->name('otpNotLogin');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/otp', [LoginController::class, 'otp'])->name('otp');
    Route::get('/wrong-phone', [LoginController::class, 'wrongPhone'])->name('wrongPhone');
    Route::get('/verify-otp', [LoginController::class, 'verifyOTP'])->name('verifyOTP');
    Route::post('/change-phone', [UserController::class, 'changePhone'])->name('changePhone');
    Route::get('/language/{language}', function ($language) {
        Session()->put('locale', $language);
    });
    Route::group(['middleware' => 'phone'], function () {
        Route::group(['namespace' => 'UI'], function () {
            Route::prefix('box')->group(function () {
                Route::get('/', [UIController::class, 'index'])->name('box');
                Route::post('/', [UIController::class, 'getAll']);
                Route::get('/{id}', [UIController::class, 'detail']);
                // Route::get('/{id}/open/{time}', [UIController::class, 'boxOpen']);
                Route::post('/{id}/create-order/{num}', [UIController::class, 'createOrder']);
                Route::post('/{id}/open-box', [UIController::class, 'openLuckyBox']);
                // Route::post('/collect', [UIController::class, 'collect']);
            });

            Route::prefix('user')->group(function () {
                Route::get('/', [UserController::class, 'index']);

                Route::get('/collection', [UserController::class, 'collectionIndex']);
                Route::get('/collection/get', [UserController::class, 'getCollection']);
                Route::delete('/collection/{id}/cancel', [UserController::class, 'cancelCollection']);

                Route::post('/change-avatar', [UserController::class, 'changeAvatar'])->name('change-avatar');
                Route::post('/change-nickname', [UserController::class, 'changeNickname']);
                Route::post('/change-gender', [UserController::class, 'changeGender']);
                Route::post('/change-username', [UserController::class, 'changeUserName']);
                Route::get('/change-password', [UserController::class, 'changePasswordIndex']);
                Route::post('/change-password', [UserController::class, 'changePassword']);

                Route::get('/balance', [MoneyRecordController::class, 'index']);
                Route::get('/balance/get', [MoneyRecordController::class, 'getMyBalance']);

                Route::prefix('shipping-address')->group(function () {
                    Route::get('/get', [ShippingAddressController::class, 'getAll']);
                    Route::get('/', [ShippingAddressController::class, 'index']);
                    Route::get('/create', [ShippingAddressController::class, 'create']);
                    Route::post('/', [ShippingAddressController::class, 'store']);
                    Route::get('/{id}/detail', [ShippingAddressController::class, 'show']);
                    Route::post('/{id}/update', [ShippingAddressController::class, 'update']);
                    Route::delete('/{id}/delete', [ShippingAddressController::class, 'destroy']);
                });

                Route::get('/set-up', [UserController::class, 'setUp']);
                Route::get('/wallet', [UserController::class, 'walletIndex']);
                Route::any('go-to-wallet', [UserController::class, 'transferWallet']);
                Route::get('/zones/{id}/townships', [ShippingAddressController::class, 'getTownshipByZoneId']);
            });

            Route::get('/tide-play', [UIController::class, 'tidePlay']);
            Route::get('/helps', [UIController::class, 'helps']);
            Route::get('/recharge', [RechargeController::class, 'index']);
            Route::get('/payment/{amount}', [RechargeController::class, 'payment']);
            Route::post('/recharge-order', [RechargeController::class, 'rechargeOrder']);
            Route::get('/shipping/{num}', [OrderController::class, 'index']);
            Route::get('/order-list', [OrderController::class, 'getAll']);
            Route::get('/exchange', [UIController::class, 'exchangeIndex']);
            Route::get('/box-cabinet', [UIController::class, 'getBoxCabinet']);
            Route::get('/wallet', [UIController::class, 'walletIndex']);
            Route::get('/wallet-list', [UserController::class, 'getWallet']);
            Route::post('/recycle', [UIController::class, 'savePrizeRecycle']);
            Route::post('/shipment-apply', [UIController::class, 'shipmentApply']);
            Route::get('/get-total-coin', [RetailController::class, 'getTotalCoin']);
            Route::get('/get-retail-list', [RetailController::class, 'getRetailList']);
            Route::get('/get-team-list', [RetailController::class, 'getTeamList']);
        });
    });
});