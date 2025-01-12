import axios from "axios";

const API_URL = "http://localhost/api/crud_api.php";

// Ambil semua laporan
export const getLaporan = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Tambah laporan baru
export const createLaporan = async (laporan) => {
  const response = await axios.post(API_URL, laporan);
  return response.data;
};

// Perbarui laporan
export const updateLaporan = async (id, laporan) => {
  const response = await axios.put(`${API_URL}?id=${id}`, laporan);
  return response.data;
};

// Hapus laporan
export const deleteLaporan = async (id) => {
  const response = await axios.delete(`${API_URL}?id=${id}`);
  return response.data;
};
