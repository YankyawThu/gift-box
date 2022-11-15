<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGiftLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gift_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('gift_box_id');
            $table->string('gift_box_name')->nullable();
            $table->string('gift_box_image')->nullable();
            $table->integer('coin_price')->default(0);
            $table->double('rmb_price')->default(0);
            $table->integer('coin_amount')->default(0);
            $table->double('rmb_amount')->default(0);
            $table->enum('times', [1, 5]);
            $table->integer('pay_coin')->default(0);
            $table->double('pay_rmb')->default(0);
            $table->string('out_trade_no')->nullable();
            $table->string('transaction_id')->nullable();
            $table->string('alipay_trade_no')->nullable();
            $table->enum('payment_method', ['coin', 'wechat', 'alipay'])->nullable();
            $table->enum('status', ['unpay', 'unused', 'used', 'refund']);
            $table->timestamp('pay_time')->nullable();
            $table->boolean('backend_read')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gift_logs');
    }
}
