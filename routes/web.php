<?php

use App\Http\Controllers\HomeController;
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
    Route::get('/', [HomeController::class, 'index'])->name('home');

    Route::resource('user', 'UserController')->only(['index']);
    Route::get('profile', ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
    Route::put('profile', ['as' => 'profile.update', 'uses' => 'ProfileController@update']);
    Route::put('profile/password', ['as' => 'profile.password', 'uses' => 'ProfileController@password']);

    Route::group(['namespace' => 'UI'], function () {
        Route::get('ui', [UIController::class, 'index'])->name('luckydraw');
        Route::post('/', [UIController::class, 'getAll']);
        Route::get('/box/{id}', [UIController::class, 'detail']);
        Route::any('/box/{id}/times/{num}', [UIController::class, 'createOrder']);
        Route::any('/open-box', [UIController::class, 'openLuckyBox']);
    });
});
