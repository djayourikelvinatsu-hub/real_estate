import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, Calendar, Download, Phone, Mail } from 'lucide-react';
import CompsSimulator from '../components/CompsSimulator';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const [showSimulator, setShowSimulator] = useState(false);

  // Mock property data
  const property = {
    address: '142 Emerald Bay',
    city: 'Laguna Beach',
    state: 'CA',
    zip: '92651',
    price: '$8,250,000',
    estValue: '$8,400,000',
    beds: 4,
    baths: 5,
    sqft: '4,200',
    yearBuilt: '2019',
    description: 'A masterpiece of modern coastal architecture, this stunning oceanfront estate offers panoramic views of the Pacific. Floor-to-ceiling glass walls disappear to merge indoor and outdoor living spaces seamlessly. Features include a zero-edge pool, private beach access, custom imported finishes, and a state-of-the-art smart home system.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
    ],
    history: [
      { date: 'Oct 12, 2023', event: 'Listed for Sale', price: '$8,250,000' },
      { date: 'May 04, 2018', event: 'Sold', price: '$6,900,000' },
      { date: 'Jan 15, 2018', event: 'Listed for Sale', price: '$7,200,000' }
    ]
  };

  return (
    <div className="property-details-page slide-up">
      {showSimulator && <CompsSimulator onClose={() => setShowSimulator(false)} />}
      <div className="container">
        
        {/* Gallery */}
        <div className="gallery-section fade-in">
          <img src={property.images[0]} alt="Main exterior" className="gallery-item item-main" />
          <img src={property.images[1]} alt="Interior living" className="gallery-item item-side-top" />
          <img src={property.images[2]} alt="Kitchen" className="gallery-item item-side-bottom" />
        </div>

        {/* Header Info */}
        <div className="property-header-info fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="title-section">
            <h1>{property.address}</h1>
            <div className="title-location">
              <MapPin size={18} />
              {property.city}, {property.state} {property.zip}
            </div>
          </div>
          <div className="price-section">
            <div className="price-value">{property.price}</div>
            <div className="price-est">Est. Value: {property.estValue}</div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="content-layout">
          <div className="main-details fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="specs-container">
              <div className="spec-box hover-lift">
                <BedDouble className="spec-icon" size={24} />
                <div className="spec-text">
                  <span className="spec-value">{property.beds}</span>
                  <span className="spec-label">Beds</span>
                </div>
              </div>
              <div className="spec-box hover-lift">
                <Bath className="spec-icon" size={24} />
                <div className="spec-text">
                  <span className="spec-value">{property.baths}</span>
                  <span className="spec-label">Baths</span>
                </div>
              </div>
              <div className="spec-box hover-lift">
                <Square className="spec-icon" size={24} />
                <div className="spec-text">
                  <span className="spec-value">{property.sqft}</span>
                  <span className="spec-label">Sq Ft</span>
                </div>
              </div>
              <div className="spec-box hover-lift">
                <Calendar className="spec-icon" size={24} />
                <div className="spec-text">
                  <span className="spec-value">{property.yearBuilt}</span>
                  <span className="spec-label">Built</span>
                </div>
              </div>
            </div>

            <div className="section-block">
              <h2>About this home</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                {property.description}
              </p>
            </div>

            <div className="section-block">
              <h2>Property History</h2>
              <div className="history-list">
                {property.history.map((h, i) => (
                  <div key={i} className="history-item">
                    <span className="history-date">{h.date}</span>
                    <span className="history-event">{h.event}</span>
                    <span className="history-price">{h.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="section-block">
              <h2>Valuation Options</h2>
              <div className="flex gap-4">
                <Link to={`/report/${id}`} className="btn btn-outline hover-lift flex items-center justify-center gap-2" style={{ flex: 1 }}>
                  <Download size={20} />
                  Download AVM Report
                </Link>
                <button 
                  className="btn btn-primary hover-lift flex items-center justify-center gap-2" 
                  style={{ flex: 1 }}
                  onClick={() => setShowSimulator(true)}
                >
                  Run Advanced Comps
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar / Contact */}
          <div className="sidebar-details fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="contact-card">
              <h3 style={{ marginBottom: '1.5rem', fontFamily: 'Inter' }}>Contact Agent</h3>
              <div className="agent-info">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Agent" className="agent-pic" />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>Sarah Jenkins</div>
                  <div style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>Aura Estates Brokerage</div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="btn btn-primary hover-lift">
                  <Phone size={18} />
                  (555) 123-4567
                </button>
                <button className="btn btn-outline hover-lift">
                  <Mail size={18} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyDetails;
