# Aura Estates (Real Estate Explorer)

A premium, full-stack real estate web application serving Sellers/Agents and Buyers/Renters. The platform provides property listings, advanced data-driven insights (AVM), and a luxury-tier user interface.

## 🌟 Features

*   **Public Explorer Home**: A striking hero section with robust autocomplete search, and a curated grid of premium listings.
*   **Agent Dashboard**: A functional workspace showing real-time metrics (Active Listings, Views, Inquiries) alongside quick property management.
*   **Property Detail Page**: A deep-dive layout with an image gallery grid, exact specifications, property history list, and interactive lead capture.
*   **Comps Simulator**: An interactive "what-if" calculator allowing users to modify property conditions (like adding a pool) and instantly see the adjusted valuation overlay.
*   **Report Generation**: An Automated Valuation Model (AVM) report view optimized for PDF export and offline sharing.
*   **Authentication Flow**: Clean login/registration modals with separate onboarding flows for Buyers/Renters vs. Agents.

## 🛠 Tech Stack

*   **Frontend**: React.js bootstrapped with Vite.
*   **Styling**: Custom Vanilla CSS focused on glassmorphism, micro-animations, and a highly polished, premium aesthetic (no external CSS frameworks used).
*   **Backend**: PHP REST API endpoints script.
*   **Database**: MySQL relational database.

## 🚀 Local Development Setup

To run this full-stack application locally, you will need a PHP/MySQL environment like [XAMPP](https://www.apachefriends.org/index.html), MAMP, or WAMP, as well as Node.js for the frontend.

### 1. Database Setup

1. Start your local MySQL server (via XAMPP/MAMP).
2. Open your database administration tool (e.g., phpMyAdmin).
3. Import the `database/schema.sql` file. This will automatically:
    * Create the `real_estate_explorer` database.
    * Build the necessary tables (`users`, `properties`, `property_images`, `property_history`).
    * Insert mock data (including an agent account and sample properties).

### 2. Backend (PHP API) Setup

1. Start your local Apache/PHP server.
2. Ensure the `backend/` folder is accessible by the web server (e.g., copy it into the `htdocs` folder for XAMPP or set up a virtual host pointing to the project root).
3. Update the database credentials in `backend/api/db.php` if your local MySQL setup requires a different username or password (defaults to `root` with no password).
4. *Note: Ensure your API endpoints are reachable, for example at `http://localhost/real_estate/backend/api/`.*

### 3. Frontend Setup

1. Open a terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the JavaScript dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the displayed local URL (typically `http://localhost:5173`) in your web browser.

## 🤝 Contribution

This project was developed iteratively. Contributions, bug reports, and feature requests are welcome!

## 📝 License

This project is licensed under the MIT License.
