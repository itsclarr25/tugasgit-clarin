<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class BookController extends Controller
{
    public function index() {
        $books = Book::all();

        if ($books->isEmpty()) {
            return response() -> json([
                'success' => true,
                'message' => 'Resource data not found'
            ], 200);
        }

        return response()->json([
            'success' => true,
            'message' => "Get all resource",
            'data' => $books
        ]);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required|text|max: 100',
            'description' => 'required|string',
            'cover' => 'required|imgae|mimes:jpeg,jpg,png|max:2048',
            'price' => 'required|numeric',
            'stock' => 'required|numeric',
            'genre_id' => 'required|genres,id',
            'author_id' => 'required|authors,id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $image = $request->file('cover');
        $image->store('books', 'public');

        Book::create([
            'title' => $request->title,
            'description' => $request->description,
            'cover' => $image->hashName(),
            'price' => $request->price,
            'stock' => $request->stock,
            'genre_id' => $request->genre_id,
            'author_id' => $request->author_id,
        ]);

        return response()->json([
            'sucdess' => true,
            'message' => 'Resource stored successfully',
            'data' => $books
        ], 201);

    }
}
