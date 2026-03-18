<?php
require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    if (isset($_GET['id'])) {
        $propertyId = $_GET['id'];
        
        // 1. Get subject property
        $stmt = $pdo->prepare('SELECT * FROM properties WHERE id = ?');
        $stmt->execute([$propertyId]);
        $subject = $stmt->fetch();
        
        if (!$subject) {
            http_response_code(404);
            echo json_encode(['error' => 'Property not found']);
            exit();
        }
        
        // 2. Find comps (simplistic: same city, similar sqft, similar bedrooms, similar type)
        $compStmt = $pdo->prepare('
            SELECT p.*, 
            ABS(p.sqft - ?) as sqft_diff
            FROM properties p 
            WHERE p.city = ? 
            AND p.property_type = ? 
            AND p.id != ?
            AND p.bedrooms BETWEEN (? - 1) AND (? + 1)
            ORDER BY sqft_diff ASC
            LIMIT 5
        ');
        $compStmt->execute([
            $subject['sqft'], 
            $subject['city'], 
            $subject['property_type'], 
            $propertyId,
            $subject['bedrooms'],
            $subject['bedrooms']
        ]);
        $comps = $compStmt->fetchAll();
        
        // 3. Simple AVM calculation
        $totalSqft = 0;
        $totalPrice = 0;
        $compCount = count($comps);
        
        foreach ($comps as $comp) {
            $totalSqft += $comp['sqft'];
            $totalPrice += $comp['price'];
        }
        
        $estimatedValue = 0;
        if ($compCount > 0 && $totalSqft > 0) {
            $avgPricePerSqft = $totalPrice / $totalSqft;
            $estimatedValue = $subject['sqft'] * $avgPricePerSqft;
            
            // Adjust based on condition rating difference (mock simplistic formula)
            $avgCondition = array_sum(array_column($comps, 'condition_rating')) / $compCount;
            $conditionDiff = $subject['condition_rating'] - $avgCondition;
            $estimatedValue += ($estimatedValue * ($conditionDiff * 0.02)); // +/- 2% per condition point difference
        }
        
        echo json_encode([
            'subject_property' => $subject,
            'comparables' => $comps,
            'avm_estimate' => round($estimatedValue, 2),
            'avm_range_low' => round($estimatedValue * 0.95, 2),
            'avm_range_high' => round($estimatedValue * 1.05, 2),
            'data_points_used' => $compCount
        ]);
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Property ID required for valuation']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
