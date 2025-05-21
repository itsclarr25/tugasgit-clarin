<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class GenreController extends Controller
{
    public function index() {
        $genres = Genre::all();

        if ($genres->isEmpty()) {
            return response() -> json([
                'success' => true,
                'message' => 'Resource data not found'
            ], 200);
        }

        return response()->json([
            'success' => true,
            'data' => $genres
        ]);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|',
            'description' => 'required|text'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        Author::create([
            'name' => $request->name,
            'description' => $request->description
        ]);

        return response()->json([
            'sucdess' => true,
            'message' => 'Resource stored successfully',
            'data' => $genres
        ], 201);

    }
}
