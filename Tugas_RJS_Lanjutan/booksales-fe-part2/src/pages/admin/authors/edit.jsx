import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAuthor, updateAuthor } from "../../../_service/author";

export default function AuthorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    age: "",
    _method: "PUT",
  });

  useEffect(() => {
    const fetchData = async () => {
      const author = await showAuthor(id);
      setFormData({
        name: author.name,
        bio: author.bio,
        age: author.age,
        _method: "PUT",
      });
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      for (const key in formData) {
        payload.append(key, formData[key]);
      }
      await updateAuthor(id, payload);
      navigate("/admin/authors");
    } catch (error) {
      console.error(error);
      alert("Gagal update author.");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Edit Author</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          <textarea name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="px-5 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-800">Update Author</button>
        </form>
      </div>
    </section>
  );
}
