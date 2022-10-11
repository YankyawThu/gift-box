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

            Route::resource('user', 'UserController', ['except' => ['show']]);
            Route::get('profile', ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
            Route::put('profile', ['as' => 'profile.update', 'uses' => 'ProfileController@update']);
            Route::put('profile/password', ['as' => 'profile.password', 'uses' => 'ProfileController@password']);

            Route::resource('items', 'ItemController');
            Route::resource('boxes', 'BoxController');
            Route::resource('item-box', 'GiftItemBoxController');
            Route::resource('category', 'BoxCategoryController');
        });
    });

    Route::group(['namespace' => 'UI'], function () {
        Route::get('/', 'UIController@index')->name('luckydraw');
    });
});
