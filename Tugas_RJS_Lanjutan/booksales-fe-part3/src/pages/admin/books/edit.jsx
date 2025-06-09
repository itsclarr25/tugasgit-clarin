import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGenres } from "../../../_service/genres";
import { getAuthors } from "../../../_service/author";
import { showBook, updateBook } from "../../../_service/books";

export default function BookEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    cover: null,
    price: 0,
    stock: 0,
    genre_id: "",
    author_id: "",
    _method: "PUT",
  });

  useEffect(() => {
    const fetchData = async () => {
      const [bookData, genresData, authorsData] = await Promise.all([
        showBook(id),
        getGenres(),
        getAuthors()
      ]);
      setFormData({
        title: bookData.title,
        description: bookData.description,
        cover: null,
        price: bookData.price,
        stock: bookData.stock,
        genre_id: bookData.genre_id,
        author_id: bookData.author_id,
        _method: "PUT",
      });
      setGenres(genresData);
      setAuthors(authorsData);
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cover") {
      setFormData((prev) => ({ ...prev, cover: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      for (const key in formData) {
        payload.append(key, formData[key]);
      }
      await updateBook(id, payload);
      navigate("/admin/books");
    } catch (error) {
      console.error(error);
      alert("Gagal update buku.");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Edit Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="file" name="cover" onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} className="w-full p-2 border rounded" required />
          <select name="genre_id" value={formData.genre_id} onChange={handleChange} className="w-full p-2 border rounded" required>
            <option value="">--Select Genre--</option>
            {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
          </select>
          <select name="author_id" value={formData.author_id} onChange={handleChange} className="w-full p-2 border rounded" required>
            <option value="">--Select Author--</option>
            {authors.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>
          <button type="submit" className="px-5 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-800">Update Book</button>
        </form>
      </div>
    </section>
  );
}
