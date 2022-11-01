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
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('address_id');
            $table->unsignedBigInteger('gift_prize_id');
            $table->enum('status', ['undelivered', 'unreceived', 'finished', 'unpay'])->comment('unpay=to be paid, undelivered=to be delivered, unreceived=to be received, finished=completed');
            $table->timestamp('delivery_time')->nullable();
            $table->timestamp('receive_time')->nullable();
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
