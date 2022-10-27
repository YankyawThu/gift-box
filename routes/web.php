<?php

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\BoxCategoryController;
use App\Http\Controllers\Admin\BoxController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\ItemController;
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

Route::prefix('admin')->name('admin.')->group(function () {
    //Login Routes
    Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

    Route::group(['middleware' => 'auth:admin'], function () {
        Route::get('/', [HomeController::class, 'index'])->name('home');

        Route::resource('user', 'UserController')->only(['index']);
        Route::get('profile', ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
        Route::put('profile', ['as' => 'profile.update', 'uses' => 'ProfileController@update']);
        Route::put('profile/password', ['as' => 'profile.password', 'uses' => 'ProfileController@password']);

        Route::get('box-items', 'BoxController@allItems')->name('box_items');
        Route::resource('items', ItemController::class);
        Route::resource('boxes', BoxController::class);
        Route::resource('itemBox', 'GiftItemBoxController')->only([
            'store', 'update',
        ]);
        Route::resource('category', BoxCategoryController::class);
        Route::resource('giftLog', 'GiftLogController');
        Route::get('boxes/{id}/items', 'GiftItemBoxController@getItems')->name('gift-items');
    });
});

Route::group(['namespace' => 'UI'], function () {
    Route::get('/', 'UIController@index')->name('luckydraw');
});
