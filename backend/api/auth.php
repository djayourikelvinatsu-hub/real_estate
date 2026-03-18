<?php
require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];
$action = isset($_GET['action']) ? $_GET['action'] : '';

if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if ($action === 'register') {
        $username = $input['username'] ?? '';
        $email = $input['email'] ?? '';
        $password = password_hash($input['password'] ?? '', PASSWORD_DEFAULT);
        $role = $input['role'] ?? 'Public';
        $firstName = $input['first_name'] ?? '';
        $lastName = $input['last_name'] ?? '';
        
        try {
            $stmt = $pdo->prepare('INSERT INTO users (username, email, password_hash, role, first_name, last_name) VALUES (?, ?, ?, ?, ?, ?)');
            $stmt->execute([$username, $email, $password, $role, $firstName, $lastName]);
            $userId = $pdo->lastInsertId();
            
            echo json_encode(['id' => $userId, 'username' => $username, 'role' => $role]);
        } catch (PDOException $e) {
            http_response_code(400);
            echo json_encode(['error' => 'Registration failed. User may already exist.']);
        }
    } elseif ($action === 'login') {
        $username = $input['username'] ?? '';
        $password = $input['password'] ?? '';
        
        $stmt = $pdo->prepare('SELECT * FROM users WHERE username = ?');
        $stmt->execute([$username]);
        $user = $stmt->fetch();
        
        if ($user && password_verify($password, $user['password_hash'])) {
            unset($user['password_hash']);
            echo json_encode($user);
        } else {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid credentials']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid action']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
