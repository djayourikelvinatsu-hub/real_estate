import React from 'react';
import { useParams } from 'react-router-dom';
import { Download, Share2, Printer, Home } from 'lucide-react';
import './ReportViewer.css';

const ReportViewer = () => {
  const { id } = useParams();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="report-viewer-page slide-up">
      
      {/* On-screen Controls */}
      <div className="report-controls fade-in">
        <div>
          <h2>Automated Valuation Model (AVM) Report</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Generated for Property ID: {id}</p>
        </div>
        <div className="report-actions">
          <button className="btn btn-outline hover-lift" onClick={handlePrint}>
            <Share2 size={18} /> Share
          </button>
          <button className="btn btn-primary hover-lift" onClick={handlePrint}>
            <Printer size={18} /> Print / PDF
          </button>
        </div>
      </div>

      {/* Printable Area */}
      <div className="print-area fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="report-doc-header">
          <div className="report-brand">
            <Home size={28} />
            Aura Estates
          </div>
          <div className="report-meta">
            <div><strong>Date:</strong> {new Date().toLocaleDateString()}</div>
            <div><strong>Prepared By:</strong> Aura Valuation Engine</div>
          </div>
        </div>

        <div className="target-property">
          <h1 className="target-address">142 Emerald Bay</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Laguna Beach, CA 92651</p>

          <img
            src="https://images.unsplash.com/photo-1613490901258-0ce3397ddc8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="142 Emerald Bay"
            style={{ width: '100%', borderRadius: '12px', marginTop: '1.5rem', objectFit: 'cover', maxHeight: '360px' }}
          />

          <div style={{ marginTop: '2rem' }}>
            <div style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', color: '#666' }}>Estimated Market Value</div>
            <div className="avm-value">$8,400,000</div>
            <div style={{ color: '#059669', fontWeight: '500', marginTop: '0.5rem' }}>High confidence interval ($8.2M - $8.6M)</div>
          </div>
        </div>

        <div className="report-section" style={{ marginTop: '4rem' }}>
          <h3 style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Comparable Properties (Comps)</h3>
          
          <div className="comps-list">
            <div className="comp-item">
              <div>
                <div className="comp-address">138 Emerald Bay</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Sold: Sep 2023 • 4 Beds, 4.5 Baths</div>
              </div>
              <div className="comp-price">$8,100,000</div>
            </div>
            
            <div className="comp-item">
              <div>
                <div className="comp-address">55 Irvine Cove</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Sold: Aug 2023 • 5 Beds, 5 Baths</div>
              </div>
              <div className="comp-price">$8,750,000</div>
            </div>
            
            <div className="comp-item">
              <div>
                <div className="comp-address">210 Emerald Bay</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Sold: Jun 2023 • 4 Beds, 5 Baths</div>
              </div>
              <div className="comp-price">$8,300,000</div>
            </div>
          </div>
        </div>
        
        <div className="report-footer" style={{ marginTop: '6rem', textAlign: 'center', fontSize: '0.8rem', color: '#999' }}>
          <p>This report is generated using an automated valuation model and historical data. It is not an official appraisal.</p>
          <p>© {new Date().getFullYear()} Aura Estates LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ReportViewer;
