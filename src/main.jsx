import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Cover from "./pages/Cover.jsx";
import LoginPage from "./pages/login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register.jsx";
import Home from "./pages/Home.jsx";
import Data from "./pages/Data.jsx";
import DataRedux from "./pages/DataRedux.jsx";
import LaporanPage from "./pages/LaporanPage.jsx"; // Import halaman LaporanPage

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Cover />, // Halaman utama (Cover Page)
  },
  {
    path: "/login",
    element: <LoginPage />, // Halaman login
  },
  {
    path: "/register",
    element: <RegisterPage />, // Halaman register
  },
  {
    path: "/home",
    element: <Home />, // Halaman home
  },
  {
    path: "/data",
    element: <Data />, // Halaman data
  },
  {
    path: "/dataredux",
    element: <DataRedux />, // Halaman dataredux
  },
  {
    path: "/laporan", // Tambahkan path untuk halaman laporan
    element: <LaporanPage />, // Integrasi halaman laporan
  },
]);

// Render aplikasi dengan RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
