<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemCategory extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "item_categories";
    protected $fillable = [
        'id_item',
        'id_category'
    ];
} 
