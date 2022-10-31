<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\Auth\LoginController as AdminLoginController;
use App\Http\Controllers\Admin\BoxCategoryController;
use App\Http\Controllers\Admin\BoxController;
use App\Http\Controllers\Admin\GiftItemBoxController;
use App\Http\Controllers\Admin\GiftLogController;
use App\Http\Controllers\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\Admin\ItemController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::name('admin.')->group(function () {
    // Login Routes
    Route::get('login', [AdminLoginController::class, 'showLoginForm'])->name('login');
    Route::post('login', [AdminLoginController::class, 'login']);
    Route::post('logout', [AdminLoginController::class, 'logout'])->name('logout');

    Route::group(['middleware' => 'auth:admin'], function () {
        Route::get('/', [AdminHomeController::class, 'index'])->name('home');

        Route::resource('admins', AdminController::class)->only(['index']);
        Route::resource('users', UserController::class)->only(['index']);

        Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::put('profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::put('profile/password', [ProfileController::class, 'password'])->name('profile.password');

        Route::get('box-items', [BoxController::class, 'allItems'])->name('box_items');
        Route::resource('items', ItemController::class);
        Route::resource('boxes', BoxController::class);
        Route::resource('itemBox', GiftItemBoxController::class)->only([
            'store', 'update', 'edit',
        ]);
        Route::resource('category', BoxCategoryController::class);
        Route::resource('giftLog', GiftLogController::class);
        Route::get('boxes/{id}/items', [GiftItemBoxController::class, 'getItems'])->name('gift-items');
    });
});
