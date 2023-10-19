<?php

use App\Enums\EmploymentType;
use App\Enums\Experience;
use App\Enums\ScheduleType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vacancies', static function (Blueprint $table): void {
            $table->id();
            $table->string('title', 100);
            $table->string('payment', 100)->nullable();
            $table->enum('employment', EmploymentType::all());
            $table->index('employment');
            $table->enum('schedule', ScheduleType::all());
            $table->index('schedule');
            $table->text('description')->nullable();
            $table->enum('experience', Experience::all());
            $table->index('experience');
            $table->json('contacts')->nullable();
            $table->json('requirements')->nullable();
            $table->json('responsibilities')->nullable();
            $table->string('conditions')->nullable();
            $table->json('skills')->nullable();
            $table->json('reviews')->nullable();
            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign('city_id')->references('id')->on('cities');
            $table->unsignedBigInteger('city_work_id')->nullable();
            $table->foreign('city_work_id')->references('id')->on('cities');

            // Создание внешнего ключа компании
            $table->unsignedBigInteger('company_id')->nullable();
            $table->foreign('company_id')
                ->references('id')
                ->on('companies')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->index('company_id');

            //date
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
