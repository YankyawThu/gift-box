<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryTradesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_trades', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->enum('pay_method', ['wechat', 'alipay', 'coin']);
            $table->double('rmb_amount')->default('0');
            $table->integer('coin_amount')->default('0');
            $table->enum('status', ['unpay', 'paid']);
            $table->string('out_trade_no')->nullable();
            $table->string('transaction_id')->nullable();
            $table->string('alipay_trade_no')->nullable();
            $table->timestamp('pay_time')->nullable();
            $table->double('pay_rmb')->default('0');
            $table->integer('pay_coin')->default('0');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('delivery_trades');
    }
}
