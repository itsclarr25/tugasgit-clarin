<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class AuthorController extends Controller
{
    public function index() {
        $authors = Author::all();
        
        if ($authors->isEmpty()) {
            return response() -> json([
                'success' => true,
                'message' => 'Resource data not found'
            ], 200);
        }

        
        return response()->json([
            'success' => true,
            'data' => $authors
        ]);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|',
            'bio' => 'required|text',
            'age' => 'required|numeris',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        Author::create([
            'name' => $request->name,
            'bio' => $request->bio,
            'age' => $request->age,
        ]);

        return response()->json([
            'sucdess' => true,
            'message' => 'Resource stored successfully',
            'data' => $authors
        ], 201);

    }

}
