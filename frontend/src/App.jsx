import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PropertyDetails from './pages/PropertyDetails';
import Auth from './pages/Auth';
import ReportViewer from './pages/ReportViewer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/report/:id" element={<ReportViewer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
