<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            'title'=>'Pulang',
            'description'=>'Petualangan seorang pemuda yang kembali ke desa kelahirannya.',
            'cover'=>'pulang.jpg',
            'price'=> 40000,
            'stock'=> 15
        ]);
        Book::create([
            'title'=>'Sebuah Seni untuk Bersikap Bodo Amat',
            'description'=>'Buku yang membahas tentang kehidupan dan filosofi hidup seseorang.',
            'cover'=>'seni.jpg',
            'price'=> 25000,
            'stock'=> 10
        ]);
        Book::create([
            'title'=>'Naruto',
            'description'=>'Buku yang membahas tentang jalan ninja seseorang.',
            'cover'=>'naruto.jpg',
            'price'=> 43000,
            'stock'=> 20
        ]);
        Book::create([
            'title'=>'Negeri 5 Menara',
            'description'=>'bercerita tentang kehidupan Alif Fikri, seorang santri asal Maninjau',
            'cover'=>'negeri.jpg',
            'price'=> 50000,
            'stock'=> 5
        ]);
        Book::create([
            'title'=>'Laut Bercerita',
            'description'=>'Novel ini berkisah tentang persahabatan, cinta, keluarga, dan kehilangan para tokoh-tokohnya',
            'cover'=>'laut.jpg',
            'price'=> 20000,
            'stock'=> 9
        ]);
    }
}
