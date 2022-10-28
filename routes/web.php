<?php

use Illuminate\Support\Facades\Route;

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
    Route::group(['namespace' => 'UI'], function () {
        Route::get('/', 'UIController@index')->name('luckydraw');
        Route::post('/', 'UIController@getAll');
        Route::get('/box/{id}', 'UIController@detail');
        Route::any('/box/{id}/times/{num}', 'UIController@createOrder');
        Route::any('/open-box', 'UIController@openLuckyBox');
    });
});
