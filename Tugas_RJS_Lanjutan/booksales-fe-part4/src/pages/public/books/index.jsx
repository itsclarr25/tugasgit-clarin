import React, { useEffect, useState } from "react";
import { getBooks } from "../../../_service/books";
import { Link } from "react-router-dom";

const BookIndex = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Buku</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={`/storage/${book.cover}`}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{book.title}</h2>
              <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                {book.description}
              </p>
              <p className="text-green-600 font-semibold">
                Rp {parseInt(book.price).toLocaleString("id-ID")}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Genre: {book.genre?.name} | Penulis: {book.author?.name}
              </p>
              <Link
                to={`/books/show/${book.id}`}
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookIndex;
