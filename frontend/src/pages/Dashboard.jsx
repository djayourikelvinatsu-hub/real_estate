import React, { useState } from 'react';
import { Home, MessageSquare, Settings, Plus, LayoutDashboard, Edit, Trash2, X, CheckCircle } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  
  // Mock data for listings
  const listings = [
    { id: 1, address: '123 Luxury Lane, Beverly Hills, CA', price: '$4,500,000', beds: 5, baths: 6, status: 'Active', img: 'https://images.unsplash.com/photo-1613490901258-0ce3397ddc8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, address: '456 Modern Ave, Austin, TX', price: '$850,000', beds: 3, baths: 2, status: 'Active', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'listings':
        return (
          <div className="fade-in">
            <h2>My Listings</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Manage all your active and pending properties.</p>
            <div className="listings-grid">
              {listings.map(listing => (
                 <div key={listing.id} className="listing-card">
                  <img src={listing.img} alt={listing.address} className="listing-img" />
                  <div className="listing-body">
                    <div className="listing-price">{listing.price}</div>
                    <div className="listing-address">{listing.address}</div>
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
        );
      case 'messages':
        return (
          <div className="fade-in">
            <h2>Messages & Inquiries</h2>
            <div style={{ marginTop: '2rem', padding: '3rem', textAlign: 'center', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
              <MessageSquare size={48} color="var(--text-tertiary)" style={{ margin: '0 auto 1rem' }}/>
              <p style={{ color: 'var(--text-secondary)' }}>You have no new messages at this time.</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="fade-in">
            <h2>Account Settings</h2>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Full Name</label>
                <input type="text" className="search-input" defaultValue="Emma Agent" style={{ border: '1px solid var(--border-color)', width: '100%' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
                <input type="email" className="search-input" defaultValue="emma@aura.estate" style={{ border: '1px solid var(--border-color)', width: '100%' }} />
              </div>
              <button className="btn btn-primary hover-lift" style={{ marginTop: '1rem', width: 'max-content' }}>Save Changes</button>
            </div>
          </div>
        );
      case 'dashboard':
      default:
        return (
          <div className="fade-in">
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
          </div>
        );
    }
  };

  return (
    <div className="dashboard-page slide-up">
      {/* Add Property Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '1rem'
        }}>
          <div className="glass-panel fade-in" style={{
            width: '100%', maxWidth: '500px', padding: '2rem',
            backgroundColor: 'var(--bg-secondary)', position: 'relative', textAlign: 'center'
          }}>
            <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
              <X size={24} />
            </button>
            <CheckCircle size={48} color="var(--accent-primary)" style={{ margin: '0 auto 1.5rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>Backend Integration Required</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
              We've prepared the frontend UI perfectly, but to save a new property, you need to execute the <strong>Integration & Testing</strong> phase by connecting the frontend React Axios calls to the `properties.php` endpoint we wrote.
            </p>
            <button className="btn btn-primary" onClick={() => setShowModal(false)} style={{ width: '100%' }}>Understood</button>
          </div>
        </div>
      )}

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
            <li className={`sidebar-link ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
              <LayoutDashboard size={20} />
              Dashboard
            </li>
            <li className={`sidebar-link ${activeTab === 'listings' ? 'active' : ''}`} onClick={() => setActiveTab('listings')}>
              <Home size={20} />
              My Listings
            </li>
            <li className={`sidebar-link ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
              <MessageSquare size={20} />
              Messages
            </li>
            <li className={`sidebar-link ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
              <Settings size={20} />
              Settings
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="dashboard-main">
          <div className="main-header">
            <h1>Agent Dashboard</h1>
            <button className="btn btn-primary hover-lift" onClick={() => setShowModal(true)}>
              <Plus size={20} />
              Add New Property
            </button>
          </div>
          
          {renderContent()}

        </section>
      </div>
    </div>
  );
};

export default Dashboard;
