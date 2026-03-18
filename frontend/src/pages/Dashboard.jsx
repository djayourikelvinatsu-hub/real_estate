import React from 'react';
import { Home, MessageSquare, Settings, Plus, LayoutDashboard, Edit, Trash2 } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  // Mock data for listings
  const listings = [
    { id: 1, address: '123 Luxury Lane, Beverly Hills, CA', price: '$4,500,000', beds: 5, baths: 6, status: 'Active', img: 'https://images.unsplash.com/photo-1613490901258-0ce3397ddc8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, address: '456 Modern Ave, Austin, TX', price: '$850,000', beds: 3, baths: 2, status: 'Active', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="dashboard-page slide-up">
      <div className="dashboard-layout fade-in">
        
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="agent-profile">
            <div className="agent-avatar">EA</div>
            <div>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Emma Agent</h3>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>Premium Broker</p>
            </div>
          </div>
          
          <ul className="sidebar-nav">
            <li className="sidebar-link active">
              <LayoutDashboard size={20} />
              Dashboard
            </li>
            <li className="sidebar-link">
              <Home size={20} />
              My Listings
            </li>
            <li className="sidebar-link">
              <MessageSquare size={20} />
              Messages
            </li>
            <li className="sidebar-link">
              <Settings size={20} />
              Settings
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="dashboard-main">
          <div className="main-header">
            <h1>Agent Dashboard</h1>
            <button className="btn btn-primary hover-lift">
              <Plus size={20} />
              Add New Property
            </button>
          </div>

          <div className="metrics-grid">
            <div className="metric-card hover-lift">
              <span className="metric-title">Active Listings</span>
              <span className="metric-value">12</span>
            </div>
            <div className="metric-card hover-lift">
              <span className="metric-title">Total Views</span>
              <span className="metric-value">4,821</span>
            </div>
            <div className="metric-card hover-lift">
              <span className="metric-title">New Inquiries</span>
              <span className="metric-value">8</span>
            </div>
          </div>

          <div className="listings-section">
            <h2 style={{ marginBottom: '1.5rem', fontFamily: 'Inter' }}>Recent Listings</h2>
            <div className="listings-grid">
              {listings.map(listing => (
                <div key={listing.id} className="listing-card">
                  <img src={listing.img} alt={listing.address} className="listing-img" />
                  <div className="listing-body">
                    <div className="listing-price">{listing.price}</div>
                    <div className="listing-address">{listing.address}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      {listing.beds} Beds • {listing.baths} Baths
                    </div>
                    <div className="listing-actions">
                      <span className="status-badge">{listing.status}</span>
                      <div className="flex gap-2">
                        <button style={{ color: 'var(--text-secondary)' }}><Edit size={18} /></button>
                        <button style={{ color: '#ef4444' }}><Trash2 size={18} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
