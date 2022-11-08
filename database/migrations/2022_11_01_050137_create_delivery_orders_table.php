<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number');
            $table->unsignedBigInteger('gift_log_id');
            $table->string('out_trade_no')->nullable();
            $table->unsignedBigInteger('delivery_trade_id')->nullable();
            $table->string('delivery_order_no')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->string('user_name')->nullable();
            $table->string('phone')->nullable();
            $table->unsignedBigInteger('address_id');
            $table->unsignedBigInteger('gift_box_id');
            $table->unsignedBigInteger('gift_item_id');
            $table->unsignedBigInteger('gift_prize_id');
            $table->unsignedBigInteger('township_id')->nullable();
            $table->string('address')->nullable();
            $table->string('gift_item_name')->nullable();
            $table->string('gift_item_image')->nullable();
            $table->enum('status', ['undelivered', 'unreceived', 'finished', 'unpay'])->comment('unpay=to be paid, undelivered=to be delivered, unreceived=to be received, finished=completed');
            $table->unsignedBigInteger('post_id')->nullable();
            $table->string('delivery_number', 100)->nullable();
            $table->timestamp('delivery_time')->nullable();
            $table->timestamp('receive_time')->nullable();
            $table->boolean('backend_read')->default(0);
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
        Schema::dropIfExists('delivery_orders');
    }
}
