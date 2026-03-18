import { Link } from 'react-router-dom';
import { Home, Search, User, Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar glass-panel">
      <div className="navbar-container container flex justify-between items-center">
        <Link to="/" className="navbar-logo flex items-center gap-2 hover-lift">
          <Home className="logo-icon" size={28} />
          <span className="logo-text">Aura Estates</span>
        </Link>
        
        <nav className="navbar-links">
          <Link to="/?mode=buy" className="nav-link">Buy</Link>
          <Link to="/?mode=rent" className="nav-link">Rent</Link>
          <Link to="/dashboard" className="nav-link">Sell</Link>
          <Link to="/property/prop1" className="nav-link">Valuation</Link>
        </nav>
        
        <div className="navbar-actions flex items-center gap-4">
          <button className="search-btn hover-lift" aria-label="Search">
            <Search size={20} />
          </button>
          <Link to="/dashboard" className="btn btn-outline hover-lift flex items-center gap-2">
            <User size={18} />
            <span>Sign In</span>
          </Link>
          <button className="mobile-menu-btn" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
