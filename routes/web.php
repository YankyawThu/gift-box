<?php

use App\Http\Controllers\UI\OrderController;
use App\Http\Controllers\UI\RechargeController;
use App\Http\Controllers\UI\UIController;
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
    Route::resource('user', 'UserController')->only(['index']);
    Route::get('profile', ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
    Route::put('profile', ['as' => 'profile.update', 'uses' => 'ProfileController@update']);
    Route::put('profile/password', ['as' => 'profile.password', 'uses' => 'ProfileController@password']);

    Route::group(['namespace' => 'UI'], function () {
        Route::prefix('box')->group(function () {
            Route::get('/', [UIController::class, 'index'])->name('home');
            Route::post('/', [UIController::class, 'getAll']);
            Route::get('/{id}', [UIController::class, 'detail']);
            Route::get('/{id}/open/{time}', [UIController::class, 'boxOpen']);
            Route::any('/{id}/create-order/{num}', [UIController::class, 'createOrder']);
            Route::any('/open-box', [UIController::class, 'openLuckyBox']);
        });
        Route::get('/recharge-list', [RechargeController::class, 'index']);
        Route::any('/recharge-order', [RechargeController::class, 'rechargeOrder']);
        Route::get('/order-list', [OrderController::class, 'index']);
    });
});
