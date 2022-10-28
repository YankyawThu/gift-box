<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\BoxCategoryController;
use App\Http\Controllers\Admin\BoxController;
use App\Http\Controllers\Admin\GiftItemBoxController;
use App\Http\Controllers\Admin\GiftLogController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\ItemController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\UI\UIController;
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
    Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
    Route::post('login', [LoginController::class, 'login']);
    Route::post('logout', [LoginController::class, 'logout'])->name('logout');

    Route::group(['middleware' => 'auth:admin'], function () {
        Route::get('/', [HomeController::class, 'index'])->name('home');

        Route::resource('admins', AdminController::class)->only(['index']);
        Route::resource('users', UserController::class)->only(['index']);

        Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::put('profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::put('profile/password', [ProfileController::class, 'password'])->name('profile.password');

        Route::get('box-items', [BoxController::class, 'allItems'])->name('box_items');
        Route::resource('items', ItemController::class);
        Route::resource('boxes', BoxController::class);
        Route::resource('itemBox', GiftItemBoxController::class)->only([
            'store', 'update',
        ]);
        Route::resource('category', BoxCategoryController::class);
        Route::resource('giftLog', GiftLogController::class);
        Route::get('boxes/{id}/items', [GiftItemBoxController::class, 'getItems'])->name('gift-items');
    });
});

Route::group(['namespace' => 'UI'], function () {
    Route::get('/', [UIController::class, 'index'])->name('luckydraw');
});
