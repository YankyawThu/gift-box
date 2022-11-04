<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGiftPrizeRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gift_prize_records', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('gift_log_id');
            $table->string('out_trade_no')->nullable();
            $table->unsignedBigInteger('gift_item_id');
            $table->string('gift_item_name')->nullable();
            $table->string('gift_item_image')->nullable();
            $table->double('gift_item_coin')->default(0);
            $table->double('gift_item_rmb')->default(0);
            $table->enum('status', ['bag', 'exchange', 'delivery', 'received'])->nullable();
            $table->timestamp('exchange_time')->nullable();
            $table->timestamp('delivery_time')->nullable();
            $table->double('delivery_fee')->default(0);
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
        Schema::dropIfExists('gift_prize_records');
    }
}
