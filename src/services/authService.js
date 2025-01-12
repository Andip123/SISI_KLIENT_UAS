import { jwtDecode } from "jwt-decode";
import axios from "axios";

const API_URL = "http://localhost/api/crud_api.php";

// Fungsi Login
export const login = (data, callback) => {
  axios
    .post(`${API_URL}?action=login`, data)
    .then((res) => {
      if (res.data.token) {
        callback(true, res.data.token);
      }else {
        callback(false, res.data.error || "Login failed")
      }
    })
    .catch((err) => {
      callback(false, err.response ? err.response.data.error: "Network Error");
    });
};

// Fungsi Register
export const register = (data, callback) => {
  axios
    .post(`${API_URL}?action=register`, data)
    .then((res) => {
      callback(true, res.data.message); // Pesan sukses
    })
    .catch((err) => {
      callback(false, err.response ? err.response.data : "Network Error");
    });
};

// Mendekode Token
export const getUsername = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.user; // Sesuaikan dengan struktur payload token Anda
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
 