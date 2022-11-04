<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('logo_image')->nullable();
            $table->double('one_rmb_to_coin_num')->default(1);
            $table->string('hot_box_banner')->nullable();
            $table->string('cheap_box_banner')->nullable();
            $table->double('recovery_discount')->default(0);
            $table->string('service_number')->nullable();
            $table->string('service_qrcode')->nullable();
            $table->double('retail_1')->default(0);
            $table->double('retail_2')->default(0);
            $table->double('retail_3')->default(0);
            $table->integer('kou')->default(0);
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
        Schema::dropIfExists('settings');
    }
}
