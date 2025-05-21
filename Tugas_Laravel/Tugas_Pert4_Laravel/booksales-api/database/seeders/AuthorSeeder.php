<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::create([
            'name' => 'Leila Salikha Chudori',
            'bio' => 'Namanya dikenal melalui karya-karyanya berupa cerita pendek, novel, dan skenario drama televisi',
            'age' => 62
        ]);
        Author::create([
            'name' => 'Mark Manson',
            'bio' => 'seorang penulis dan narablog swadaya Amerika Serikat.',
            'age' => 41
        ]);
        Author::create([
            'name' => 'Masashi Kishimoto',
            'bio' => 'Adalah salah satu mangaka terbaik Jepang.',
            'age' => 50
        ]);
        Author::create([
            'name' => 'Dewi Lestari',
            'bio' => 'seorang penulis dan penyanyi-penulis lagu asal Indonesia.',
            'age' => 49
        ]);
        Author::create([
            'name' => 'Ahmad Fuadi',
            'bio' => 'Adalah novelis, pekerja sosial, dan mantan wartawan dari Indonesia.',
            'age' => 41
        ]);
    }
}
