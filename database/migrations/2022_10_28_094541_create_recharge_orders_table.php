<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRechargeOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recharge_orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->double('amount')->default(0);
            $table->tinyInteger('pay_method')->nullable();
            $table->string('out_trade_number')->nullable();
            $table->string('transaction_id')->nullable();
            $table->timestamp('pay_time')->nullable();
            $table->enum('status', ['unpay', 'paid']);
            $table->boolean('backend_read')->default(0);
            $table->string('voucher')->nullable();
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
        Schema::dropIfExists('recharge_orders');
    }
}
