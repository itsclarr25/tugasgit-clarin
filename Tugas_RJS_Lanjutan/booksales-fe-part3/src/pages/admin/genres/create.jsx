import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GenreCreate() {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/genres", formData);
      navigate("/admin/genres");
    } catch (err) {
      console.error(err);
      alert("Failed to create genre");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Create New Genre</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-sm w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-sm w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            ></textarea>
          </div>
          <div className="flex items-center space-x-4">
            <button type="submit" className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-sm px-5 py-2.5">
              Create Genre
            </button>
            <button
              type="reset"
              onClick={() => setFormData({ name: "", description: "" })}
              className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white rounded-lg text-sm px-5 py-2.5"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
