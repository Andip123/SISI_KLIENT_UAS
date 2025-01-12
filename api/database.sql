-- Membuat database
CREATE DATABASE IF NOT EXISTS test_api;

-- Menggunakan database
USE test_api;

-- Membuat tabel 'users' untuk login dan register
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Menambahkan contoh data pengguna
INSERT INTO users (username, email, password) VALUES
('admin', 'admin@example.com', MD5('password123')),
('user1', 'user1@example.com', MD5('password123')),
('user2', 'user2@example.com', MD5('password123'));

-- Membuat tabel 'items' untuk fitur CRUD
CREATE TABLE laporan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,         -- Nama lokasi/laporan
    description TEXT NOT NULL,          -- Deskripsi laporan
    type ENUM('damage', 'donation', 'location') DEFAULT 'damage', -- Jenis laporan
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Waktu pembuatan
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Waktu pembaruan
);

