<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    private $authors = [
        [
            'name' => 'PulangLeila Salikha Chudori',
            'bio' => 'Namanya dikenal melalui karya-karyanya berupa cerita pendek, novel, dan skenario drama televisi',
            'age' => 62,
        ],
        [
            'name' => 'Mark Manson',
            'bio' => 'seorang penulis dan narablog swadaya Amerika Serikat.',
            'age' => 41,
        ],
        [
            'name' => 'Masashi Kishimoto',
            'bio' => 'Adalah salah satu mangaka terbaik Jepang.',
            'age' => 50,
        ],
        [
            'name' => 'Dewi Lestari',
            'bio' => 'seorang penulis dan penyanyi-penulis lagu asal Indonesia.',
            'age' => 49,
        ],
        [
            'name' => 'Ahmad Fuadi',
            'bio' => 'Adalah novelis, pekerja sosial, dan mantan wartawan dari Indonesia.',
            'age' => 41,
        ]
    ];

    public function getAuthors() {
        return $this->authors;
    }
}
