<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Koneksi ke database
$host = "localhost";
$username = "root"; // Ganti dengan username database Anda
$password = ""; // Ganti dengan password database Anda
$database = "test_api"; // Ganti dengan nama database Anda

$conn = new mysqli($host, $username, $password, $database);

// Cek koneksi
if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

// Mendapatkan metode HTTP
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['action']) && $_GET['action'] === 'laporan') {
            if (isset($_GET['id'])) {
                // Ambil satu laporan berdasarkan ID
                $id = intval($_GET['id']);
                $result = $conn->query("SELECT * FROM laporan WHERE id = $id");
                $laporan = $result->fetch_assoc();
                echo json_encode($laporan);
            } else {
                // Ambil semua laporan
                $result = $conn->query("SELECT * FROM laporan");
                $laporan = [];
                while ($row = $result->fetch_assoc()) {
                    $laporan[] = $row;
                }
                echo json_encode($laporan);
            }
        }
        break;    

    case 'POST':
        if (isset($_GET['action'])) {
            $action = $_GET['action'];

            if ($action === 'register') {
                // Register pengguna baru
                $username = $conn->real_escape_string($input['username']);
                $email = $conn->real_escape_string($input['email']);
                $password = password_hash($conn->real_escape_string($input['password']), PASSWORD_BCRYPT); // Hash password dengan bcrypt

                // Cek apakah username atau email sudah ada
                $check = $conn->query("SELECT * FROM users WHERE username='$username' OR email='$email'");
                if ($check->num_rows > 0) {
                    echo json_encode(["error" => "Username or email already exists"]);
                } else {
                    $conn->query("INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')");
                    echo json_encode(["message" => "User registered successfully"]);
                }
            } elseif ($action === 'login') {
                // Login pengguna
                $email = $conn->real_escape_string($input['email']);
                $password = $conn->real_escape_string($input['password']);

                $result = $conn->query("SELECT * FROM users WHERE email='$email'");
                if ($result->num_rows > 0) {
                    $user = $result->fetch_assoc();
                    // Verifikasi password
                    if (password_verify($password, $user['password'])) {
                        // Buat token
                        $token = base64_encode(json_encode([
                            "user" => $user['username'],
                            "email" => $user['email']
                        ]));
                        echo json_encode(["message" => "Login successful", "token" => $token]);
                    } else {
                        echo json_encode(["error" => "Invalid email or password"]);
                    }
                } else {
                    echo json_encode(["error" => "Invalid email or password"]);
                }
            } elseif ($action === 'laporan') {
                // Validasi input
                $name = isset($input['name']) ? $conn->real_escape_string($input['name']) : null;
                $description = isset($input['description']) ? $conn->real_escape_string($input['description']) : null;
                $type = isset($input['type']) && !empty($input['type']) ? $conn->real_escape_string($input['type']) : 'Tidak ada jenis';
            
                if ($name && $description) {
                    $query = $conn->query("INSERT INTO laporan (name, description, type) VALUES ('$name', '$description', '$type')");
            
                    if ($query) {
                        echo json_encode(["id" => $conn->insert_id, "message" => "Laporan created successfully"]);
                    } else {
                        echo json_encode(["error" => "Failed to create laporan"]);
                    }
                } else {
                    echo json_encode(["error" => "Invalid or incomplete data"]);
                }
            }
            
        }
        break;

        case 'PUT':
            if (isset($_GET['id'])) {
                $id = intval($_GET['id']);
                $name = $conn->real_escape_string($input['name']);
                $description = $conn->real_escape_string($input['description']);
                $type = $conn->real_escape_string($input['type']); // Tambahkan pengolahan untuk `type`
        
                error_log("Data PUT: name=$name, description=$description, type=$type, id=$id"); // Debugging
        
                $conn->query("UPDATE laporan SET name='$name', description='$description', type='$type' WHERE id=$id");
                echo json_encode(["message" => "Laporan updated successfully"]);
            } else {
                echo json_encode(["error" => "ID is required for updating"]);
            }
            break;
        

    case 'DELETE':
        if (isset($_GET['action']) && $_GET['action'] === 'laporan') {
            // Menghapus laporan berdasarkan ID
            if (isset($_GET['id'])) {
                $id = intval($_GET['id']);
                $conn->query("DELETE FROM laporan WHERE id=$id");
                echo json_encode(["message" => "Laporan deleted successfully"]);
            } else {
                echo json_encode(["error" => "ID is required for deletion"]);
            }
        }
        break;

    default:
        echo json_encode(["error" => "Invalid request method"]);
        break;
}

$conn->close();
?>
