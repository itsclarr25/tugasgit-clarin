<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    public function index ()
    {
        $transaction = Transaction::with('user', 'book')->get();

        if ($transaction->isEmpty()) {
            return response() -> json([
                'success' => true,
                'message' => 'Kosong wak'
            ], 200);
        }

        return response()->json([
            'success' => true,
            'message' => "Get all resource",
            'data' => $transaction
        ]);
    }

    public function store (Request $request)
    {
        // 1 validator & cek validator
        $validator = Validator::make($request->all(), [
            'book_id' => 'required|exist:books,id',
            'quantity' => 'required|integer|min:1'
        ]);

        if ($validator->fails()){
            return response() -> json([
                'success' => false,
                'message' => 'Validation error',
                'data' => $validator->errors()
            ]. 422);
        }
        // 2 generate order number harus unique | ORD-000x
        $uniqueCode = "ORD-" . strtoupper(uniqid());
        // 3 ambil user yang sedang login saat ini & cek login (apakah ada data user)
        $user = auth('api')->user();

        if(!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized'
            ], 401);
        }
        // 4 mencari data buku dari request
        $book = Book::find($request->book_id);
        // 5 cek stok buku
        if ($book->stock < $request->quantity) {
            return response() -> json([
                'success' => false,
                'message' => 'stock barang tidak cukup'
            ], 400);
        }
        // 7 hitung total harga = price * quantity
        $totalAmount = $book->harga * $request->quantity;
        // 8 kurangi stok buku
        $book->stock -= $request->quantity;
        $book->save();
        // 9 simpan data 
        $transaction = Transaction::create([
            'order_number' => $uniqueCode,
            'customer_id' => $user->id,
            'book_id' => $request->book_id,
            'total_amount' => $totalAmount
        ]);

        return response() -> json([
            'success' => true,
            'message' => 'Transaksi berhasil',
            'data' => $transaction
        ], 201);
    }

    public function show(string $id) {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response() -> json([
                'success' => 'false',
                'message' => 'Resource not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Get detailed resource',
            'data' => $transaction
        ], 200);
    }

    public function destroy(string $id) {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response() -> json([
                'success' => 'false',
                'message' => 'Resource not found'
            ], 404);
        }

        $transaction->delete();
        return response()->json([
            'success' => true,
            'message' => 'Delete success'
        ]);
    }
}
