CREATE DATABASE IF NOT EXISTS real_estate_explorer;
USE real_estate_explorer;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('Agent', 'Public') DEFAULT 'Public',
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone VARCHAR(20),
    company VARCHAR(100),
    license_number VARCHAR(50),
    profile_image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS properties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    agent_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(12, 2) NOT NULL,
    listing_type ENUM('For Sale', 'For Rent') NOT NULL,
    property_type ENUM('House', 'Apartment', 'Condo', 'Townhouse', 'Land', 'Multi-Family') NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    bedrooms INT,
    bathrooms DECIMAL(3, 1),
    sqft INT,
    lot_size_sqft INT,
    year_built INT,
    condition_rating INT COMMENT '1-10 scale',
    has_pool BOOLEAN DEFAULT FALSE,
    has_basement BOOLEAN DEFAULT FALSE,
    main_image_url VARCHAR(255),
    status ENUM('Active', 'Pending', 'Sold', 'Off Market') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (agent_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS property_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    property_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS property_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    property_id INT NOT NULL,
    event_date DATE NOT NULL,
    event_type ENUM('Listed', 'Price Change', 'Sold', 'Delisted') NOT NULL,
    price DECIMAL(12, 2) NOT NULL,
    details VARCHAR(255),
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_comps_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    primary_property_id INT NOT NULL,
    report_name VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (primary_property_id) REFERENCES properties(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS selected_comps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    report_id INT NOT NULL,
    comp_property_id INT NOT NULL,
    FOREIGN KEY (report_id) REFERENCES user_comps_reports(id) ON DELETE CASCADE,
    FOREIGN KEY (comp_property_id) REFERENCES properties(id) ON DELETE CASCADE
);
