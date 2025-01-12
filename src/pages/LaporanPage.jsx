import React, { useState, useEffect } from "react";
import LaporanList from "../components/Laporan/LaporanList";

const LaporanPage = () => {
  const [laporan, setLaporan] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", type: "" });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch laporan data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/api/crud_api.php?action=laporan");
        const data = await response.json();
        setLaporan(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching laporan:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.description || !formData.type) {
      alert("Semua data harus diisi!");
      return;
    }
  
    const endpoint = editMode
      ? `http://localhost/api/crud_api.php?action=laporan&id=${editId}`
      : "http://localhost/api/crud_api.php?action=laporan";
  
    const method = editMode ? "PUT" : "POST";
  
    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.message) {
        alert(result.message);
        setFormData({ name: "", description: "", type: "" });
        setEditMode(false);
        setEditId(null);
        // Refresh laporan
        const res = await fetch("http://localhost/api/crud_api.php?action=laporan");
        const data = await res.json();
        setLaporan(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error submitting laporan:", error);
    }
  };
  

  const handleEdit = (item) => {
    setFormData({ name: item.name, description: item.description, type: item.type });
    setEditMode(true);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus laporan ini?")) {
      try {
        const response = await fetch(`http://localhost/api/crud_api.php?action=laporan&id=${id}`, {
          method: "DELETE",
        });

        const result = await response.json();

        if (result.message) {
          alert(result.message);
          // Refresh laporan
          const res = await fetch("http://localhost/api/crud_api.php?action=laporan");
          const data = await res.json();
          setLaporan(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Error deleting laporan:", error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">Halaman Laporan</h1>

      {/* Form Tambah/Edit Laporan */}
      <div className="p-4 bg-gray-800 rounded-md mb-6">
        <h3 className="text-white mb-4">{editMode ? "Edit Laporan" : "Tambah Laporan"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">Nama Lokasi</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Deskripsi</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Jenis</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {editMode ? "Update Laporan" : "Tambah Laporan"}
          </button>
        </form>
      </div>

      {/* Daftar Laporan */}
      <LaporanList laporan={laporan} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default LaporanPage;
