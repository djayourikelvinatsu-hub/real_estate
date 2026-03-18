import React, { useState } from 'react';
import { X, SlidersHorizontal } from 'lucide-react';

const CompsSimulator = ({ onClose }) => {
  const [condition, setCondition] = useState(3); // 1-5 scale
  const [kitchenUpdate, setKitchenUpdate] = useState(false);
  const [poolAdded, setPoolAdded] = useState(false);
  
  const baseValue = 8400000;
  
  // Simple simulator logic
  const calculateAdjustedValue = () => {
    let value = baseValue;
    if (condition < 3) value -= 200000;
    if (condition > 3) value += 250000 * (condition - 3);
    if (kitchenUpdate) value += 150000;
    if (poolAdded) value += 180000;
    return value;
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, padding: '1rem'
    }}>
      <div className="glass-panel fade-in" style={{
        width: '100%', maxWidth: '600px', padding: '2rem',
        backgroundColor: 'var(--bg-secondary)', position: 'relative'
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
          <X size={24} />
        </button>
        
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <SlidersHorizontal size={24} color="var(--accent-primary)" />
          What-If Simulator
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Property Condition (1-5)</label>
            <input 
              type="range" min="1" max="5" value={condition}
              onChange={(e) => setCondition(parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <span>Needs Work</span>
              <span>Average</span>
              <span>Excellent</span>
            </div>
          </div>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
            <input type="checkbox" checked={kitchenUpdate} onChange={(e) => setKitchenUpdate(e.target.checked)} style={{ width: '20px', height: '20px' }} />
            <span style={{ fontWeight: 500 }}>Remodeled Kitchen (+$150k value)</span>
          </label>
          
          <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
            <input type="checkbox" checked={poolAdded} onChange={(e) => setPoolAdded(e.target.checked)} style={{ width: '20px', height: '20px' }} />
            <span style={{ fontWeight: 500 }}>Added Swimming Pool (+$180k value)</span>
          </label>
          
          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Adjusted Estimated Value</div>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-primary)', marginTop: '0.5rem' }}>
              ${calculateAdjustedValue().toLocaleString()}
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>
              Base Valuation: ${baseValue.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompsSimulator;
