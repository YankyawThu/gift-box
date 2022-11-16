<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecyclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recycles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('gift_prize_id');
            $table->unsignedBigInteger('gift_box_id');
            $table->unsignedBigInteger('gift_log_id');
            $table->unsignedBigInteger('gift_item_id');
            $table->string('gift_item_name')->nullable();
            $table->string('gift_item_image')->nullable();
            $table->double('price')->default(0);
            $table->boolean('status')->default(0);
            $table->timestamp('exchange_time')->nullable();
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
        Schema::dropIfExists('recycles');
    }
}
