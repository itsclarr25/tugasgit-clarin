import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showGenre, updateGenre } from "../../../_service/genres";

export default function GenreEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    _method: "PUT",
  });

  useEffect(() => {
    const fetchData = async () => {
      const genre = await showGenre(id);
      setFormData({
        name: genre.name,
        description: genre.description,
        _method: "PUT",
      });
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      for (const key in formData) {
        payload.append(key, formData[key]);
      }
      await updateGenre(id, payload);
      navigate("/admin/genres");
    } catch (error) {
      console.error(error);
      alert("Gagal update genre.");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit Genre
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nama Genre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2.5 rounded-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Deskripsi
            </label>
            <textarea
              name="description"
              id="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2.5 rounded-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
              required
            ></textarea>
          </div>
          <button type="submit" className="px-5 py-2.5 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800">
            Update Genre
          </button>
        </form>
      </div>
    </section>
  );
}
