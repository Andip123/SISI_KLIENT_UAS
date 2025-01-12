import React, { useState, useEffect } from "react";

const FormLaporan = ({ onSubmit, laporan = {}, resetEditing }) => {
  // Pastikan properti `laporan` memiliki nilai default
  const [name, setName] = useState(laporan?.name || "");
  const [description, setDescription] = useState(laporan?.description || "");
  const [type, setType] = useState(laporan?.type || "damage");

  useEffect(() => {
    // Update state jika `laporan` berubah
    setName(laporan?.name || "");
    setDescription(laporan?.description || "");
    setType(laporan?.type || "damage");
  }, [laporan]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: laporan?.id || null,
      name,
      description,
      type,
    });
    resetEditing();
    setName("");
    setDescription("");
    setType("damage");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded-md">
      <h3 className="text-white mb-4">
        {laporan?.id ? "Edit Laporan" : "Tambah Laporan"}
      </h3>
      <label className="text-white">Nama Lokasi</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-4 rounded-md"
        placeholder="Masukkan nama lokasi"
        required
      />
      <label className="text-white">Deskripsi</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-4 rounded-md"
        placeholder="Deskripsikan kondisi"
        required
      ></textarea>
      <label className="text-white">Jenis Laporan</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-2 mb-4 rounded-md"
      >
        <option value="damage">Kerusakan</option>
        <option value="donation">Donasi</option>
        <option value="location">Lokasi Terdampak</option>
      </select>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        {laporan?.id ? "Perbarui" : "Tambah"}
      </button>
    </form>
  );
};

export default FormLaporan;
