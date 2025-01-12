import React from "react";

const LaporanList = ({ laporan, onEdit, onDelete }) => {
  if (!Array.isArray(laporan)) {
    // Pastikan laporan adalah array untuk menghindari error
    console.error("Data laporan bukan array:", laporan);
    return (
      <div className="p-4 bg-gray-800 rounded-md">
        <h3 className="text-white mb-4">Daftar Laporan</h3>
        <p className="text-red-500">Data laporan tidak valid atau kosong.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-800 rounded-md">
      <h3 className="text-white mb-4">Daftar Laporan</h3>
      {laporan.length === 0 ? (
        <p className="text-gray-400">Tidak ada laporan yang tersedia.</p>
      ) : (
        <table className="w-full text-white border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="border border-gray-700 px-4 py-2">Nama Lokasi</th>
              <th className="border border-gray-700 px-4 py-2">Deskripsi</th>
              <th className="border border-gray-700 px-4 py-2">Jenis</th>
              <th className="border border-gray-700 px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
  {laporan.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.type || "Tidak ada jenis"}</td> {/* Fallback jika type kosong */}
      <td>
        <button
          onClick={() => onEdit(item)}
          className="text-yellow-500 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="text-red-500"
        >
          Hapus
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      )}
    </div>
  );
};

export default LaporanList;
