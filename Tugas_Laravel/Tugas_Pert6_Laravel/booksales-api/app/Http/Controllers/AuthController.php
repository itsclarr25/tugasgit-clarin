<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request) {
        //1 setup validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:8'
        ]);
        //2 check validator
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        //3 create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        //4 isSuccess
        if ($user) {
            return response()->json([
                'success' => true,
                'message' => 'user created success',
                'data' => $user
            ], 201);
        }
        //5 check gagal
        return response()->json([
            'success' => false,
            'message' => 'user creation fails',
        ], 409);
    }

    public function login(Request $request) {
        //1 setup validator
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        //2 check validator
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        //3 req credentials
        $credentials = $request->only('email', 'password');
        //4 check isFailed
        if(!$token = auth()->guard('api')->attempt($credentials)) {
            return response() -> json([
                'success' => false,
                'message' => 'email atau password salah'
            ], 401);
        }
        //5 check isSuccess
        return response()->json([
            'success' => true,
            'message' => 'Login berhasil',
            'user' => auth()->guard('api')->user(),
            'token' => $token,
        ], 200);
    }

    public function logout(Request $request) {
        // try         
        // //1 invalidate token
        //2 check jika berhasil

        try {
            JWTAuth::invalidate(JWTAuth::getToken());

            return response()->json([
                'success' => true,
                'message' => 'Logout berhasil'
            ], 200);
        } catch (JWTException $e) {
            return response() -> json([
                'success' => false,
                'message' => 'Logout failed'
            ], 500);
        }
        //catch
        //is failed
    }
}
