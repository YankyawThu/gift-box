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
            $table->enum('times', [1, 5]);
            $table->double('amount')->default(0);
            $table->enum('payment_method', ['coin', 'wechat', 'alipay'])->nullable();
            $table->enum('status', ['unpay', 'unused', 'used', 'refund']);
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
