<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoneyRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('money_records', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->double('before')->default(0);
            $table->double('after')->default(0);
            $table->double('money')->default(0);
            $table->enum('type', ['recycle', 'withdraw', 'deposit']);
            $table->enum('status', ['pending', 'approved']);
            $table->unsignedBigInteger('order_id')->nullable();
            $table->unsignedBigInteger('prize_id')->nullable();
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
        Schema::dropIfExists('money_records');
    }
}
