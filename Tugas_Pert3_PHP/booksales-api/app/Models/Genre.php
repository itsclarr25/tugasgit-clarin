<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    private $genres = [
        [
            'genre' => 'Fiction',
            'description' => 'Sebuah genre fiksi yang mengandung kisah yang tidak nyata.'
        ],
        [
            'genre' => 'Non-Fiction',
            'description' => 'karya sastra yang berdasarkan fakta, peristiwa nyata, atau orang sungguhan.',
        ],
        [
            'genre' => 'Comic',
            'description' => 'Sebuah buku cerita bergambar yang berisi berbagai manga, manhwa, manhua dll..',
        ],
        [
            'genre' => 'Horror',
            'description' => 'genre yang bertujuan untuk membangkitkan rasa takut, kecemasan, atau ketegangan pada pembaca.'
        ],
        [
            'genre' => 'Scifi',
            'description' => 'genre fiksi yang mengeksplorasi konsep ilmiah dan teknologi masa depan.'
        ]
    ];

    public function getGenres() {
        return $this->genres;
    }
}
