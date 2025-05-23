<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books';

    protected $fillable = ['title', 'description', 'cover', 'price', 'stock', 'genre_id', 'author_id'];
}
