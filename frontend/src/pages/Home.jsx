import React from 'react';
import { Search, MapPin, BedDouble, Bath, Square, Heart, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get('mode');

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate routing to a map search view
    console.log("Searching properties...");
  };

  let title = "Discover Your Perfect Space";
  let subtitle = "Premium real estate experiences with advanced valuation insights.";
  if (mode === 'buy') {
    title = "Find Your Dream Home";
    subtitle = "Explore luxury properties for sale in exclusive neighborhoods.";
  } else if (mode === 'rent') {
    title = "Luxury Rentals Unlocked";
    subtitle = "Discover premium rental properties tailored to your lifestyle.";
  }

  const featuredProperties = [
    { id: 'prop1', address: '142 Emerald Bay, Laguna Beach, CA', price: '$8,250,000', beds: 4, baths: 5, sqft: '4,200', type: 'For Sale', img: 'https://images.unsplash.com/photo-1613490901258-0ce3397ddc8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { id: 'prop2', address: '12 Penthouse, New York, NY', price: '$6,400,000', beds: 3, baths: 3.5, sqft: '3,100', type: 'For Sale', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { id: 'prop3', address: '88 Lakefront Dr, Tahoe, NV', price: '$4,150,000', beds: 5, baths: 4, sqft: '4,850', type: 'For Sale', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  ];

  return (
    <div className="home-page fade-in">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content slide-up">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          <form className="search-container slide-up" style={{ animationDelay: '0.2s' }} onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <Search color="rgba(255,255,255,0.7)" size={24} />
              <input 
                type="text" 
                className="search-input" 
                placeholder="Enter city, neighborhood, or zip code..." 
              />
            </div>
            <button type="submit" className="btn btn-primary search-button hover-lift">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-section container">
        <div className="section-header slide-up" style={{ animationDelay: '0.3s' }}>
          <div>
            <h2 className="section-title">Exclusive Listings</h2>
            <p className="section-subtitle">Curated properties that define luxury living.</p>
          </div>
          <a href="#" className="view-all-link">View all properties <ArrowRight size={20} /></a>
        </div>

        <div className="property-grid slide-up" style={{ animationDelay: '0.4s' }}>
          {featuredProperties.map(property => (
            <div key={property.id} className="property-card hover-lift" onClick={() => navigate(`/property/${property.id}`)}>
              <div className="property-image-container">
                <img src={property.img} alt={property.address} className="property-image" />
                <span className="property-badge">{property.type}</span>
                <button className="favorite-btn" onClick={(e) => { e.stopPropagation(); /* toggle favorite */ }}>
                  <Heart size={20} />
                </button>
              </div>
              <div className="property-details">
                <div className="property-price">{property.price}</div>
                <div className="property-location flex items-center gap-2">
                  <MapPin size={16} />
                  {property.address}
                </div>
                <div className="property-stats">
                  <div className="stat-item"><BedDouble size={18} /> {property.beds}</div>
                  <div className="stat-item"><Bath size={18} /> {property.baths}</div>
                  <div className="stat-item"><Square size={18} /> {property.sqft} sqft</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
