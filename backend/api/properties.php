<?php
require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    if (isset($_GET['id'])) {
        // Get single property details
        $stmt = $pdo->prepare('SELECT p.*, u.first_name, u.last_name, u.company, u.profile_image_url, u.email, u.phone FROM properties p LEFT JOIN users u ON p.agent_id = u.id WHERE p.id = ?');
        $stmt->execute([$_GET['id']]);
        $property = $stmt->fetch();
        
        if ($property) {
            // Get images
            $imgStmt = $pdo->prepare('SELECT * FROM property_images WHERE property_id = ?');
            $imgStmt->execute([$_GET['id']]);
            $property['images'] = $imgStmt->fetchAll();
            
            // Get history
            $histStmt = $pdo->prepare('SELECT * FROM property_history WHERE property_id = ? ORDER BY event_date DESC');
            $histStmt->execute([$_GET['id']]);
            $property['history'] = $histStmt->fetchAll();
            
            echo json_encode($property);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Property not found']);
        }
    } else {
        // List properties with optional filters
        $query = 'SELECT * FROM properties WHERE status = "Active"';
        $params = [];
        
        if (!empty($_GET['search'])) {
            $query .= ' AND (address LIKE ? OR city LIKE ? OR zip_code LIKE ?)';
            $searchTerm = '%' . $_GET['search'] . '%';
            $params[] = $searchTerm;
            $params[] = $searchTerm;
            $params[] = $searchTerm;
        }
        
        if (!empty($_GET['type'])) {
            $query .= ' AND listing_type = ?';
            $params[] = $_GET['type'];
        }
        
        if (!empty($_GET['minPrice'])) {
            $query .= ' AND price >= ?';
            $params[] = $_GET['minPrice'];
        }
        
        if (!empty($_GET['maxPrice'])) {
            $query .= ' AND price <= ?';
            $params[] = $_GET['maxPrice'];
        }
        if (!empty($_GET['bedrooms'])) {
            $query .= ' AND bedrooms >= ?';
            $params[] = $_GET['bedrooms'];
        }

        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $properties = $stmt->fetchAll();
        
        echo json_encode($properties);
    }
} elseif ($method === 'POST') {
    // Create new property
    $input = json_decode(file_get_contents('php://input'), true);
    
    // In a real app, we validate auth token and get agent_id here
    $agentId = $input['agent_id'] ?? 1; // Fallback for testing
    
    $stmt = $pdo->prepare('INSERT INTO properties (agent_id, title, description, price, listing_type, property_type, address, city, state, zip_code, latitude, longitude, bedrooms, bathrooms, sqft, lot_size_sqft, year_built, has_pool, has_basement, main_image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    
    try {
        $stmt->execute([
            $agentId, $input['title'] ?? '', $input['description'] ?? '', $input['price'] ?? 0, 
            $input['listing_type'] ?? 'For Sale', $input['property_type'] ?? 'House', 
            $input['address'] ?? '', $input['city'] ?? '', $input['state'] ?? '', $input['zip_code'] ?? '', 
            $input['latitude'] ?? null, $input['longitude'] ?? null, $input['bedrooms'] ?? 0, 
            $input['bathrooms'] ?? 0, $input['sqft'] ?? 0, $input['lot_size_sqft'] ?? 0, 
            $input['year_built'] ?? null, $input['has_pool'] ?? 0, $input['has_basement'] ?? 0, 
            $input['main_image_url'] ?? null
        ]);
        $propId = $pdo->lastInsertId();
        
        // Add initial history event
        $histStmt = $pdo->prepare("INSERT INTO property_history (property_id, event_date, event_type, price, details) VALUES (?, CURDATE(), 'Listed', ?, 'Initial listing')");
        $histStmt->execute([$propId, $input['price'] ?? 0]);

        echo json_encode(['id' => $propId, 'success' => true]);
    } catch (PDOException $e) {
        http_response_code(400);
        echo json_encode(['error' => 'Failed to add property: ' . $e->getMessage()]);
    }
}
?>
