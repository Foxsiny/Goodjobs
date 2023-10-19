<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Vacancy extends Model
{
    use HasFactory;

    protected $table = 'vacancies';

    protected $fillable = [
        'title', // название
        'payment', // зарплата
        'employment', // тип работы (полный день...)
        'description', // описание
        'experience', // опыт
        'contacts', // контакты
        'requirements', // требования
        'responsibilities', // обязанности
        'conditions', // условия
        'skills', // навыки
        'reviews', // отзывы
        'company_id', // компания
        'city_id', // город
        'city_work_id', //город работы
        'schedule', // график работы
    ];

    public function categories(): belongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_vacancy', 'vacancy_id', 'category_id');
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function city(): HasOne
    {
        return $this->hasOne(City::class, 'id', 'city_id');
    }
}
