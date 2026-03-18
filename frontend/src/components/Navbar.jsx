import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, User, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar glass-panel">
      <div className="navbar-container container flex justify-between items-center">
        <Link to="/" className="navbar-logo flex items-center gap-2 hover-lift" onClick={closeMenu}>
          <Home className="logo-icon" size={28} />
          <span className="logo-text">Aura Estates</span>
        </Link>
        
        <nav className={`navbar-links ${isMenuOpen ? 'mobile-active' : ''}`}>
          <Link to="/?mode=buy" className="nav-link" onClick={closeMenu}>Buy</Link>
          <Link to="/?mode=rent" className="nav-link" onClick={closeMenu}>Rent</Link>
          <Link to="/dashboard" className="nav-link" onClick={closeMenu}>Sell</Link>
          <Link to="/property/prop1" className="nav-link" onClick={closeMenu}>Valuation</Link>
          <div className="mobile-only-actions">
            <Link to="/dashboard" className="btn btn-primary" onClick={closeMenu}>
              Sign In
            </Link>
          </div>
        </nav>
        
        <div className="navbar-actions flex items-center gap-4">
          <button className="search-btn hover-lift" aria-label="Search">
            <Search size={20} />
          </button>
          <Link to="/dashboard" className="btn btn-outline hover-lift flex items-center gap-2 desktop-only">
            <User size={18} />
            <span>Sign In</span>
          </Link>
          <button className="mobile-menu-btn" aria-label="Menu" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;
