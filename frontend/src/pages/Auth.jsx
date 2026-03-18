import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('user'); // 'user' or 'agent'

  return (
    <div className="auth-page slide-up">
      <div className="auth-card fade-in">
        <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        
        {!isLogin && (
          <div className="role-toggle fade-in">
            <button 
              className={`role-btn ${role === 'user' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setRole('user'); }}
            >
              Buyer / Renter
            </button>
            <button 
              className={`role-btn ${role === 'agent' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setRole('agent'); }}
            >
              Real Estate Agent
            </button>
          </div>
        )}

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="form-group slide-up" style={{ animationDelay: '0.1s' }}>
              <label>Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
                <input type="text" className="auth-input" placeholder="John Doe" style={{ paddingLeft: '2.5rem' }} />
              </div>
            </div>
          )}
          
          <div className="form-group slide-up" style={{ animationDelay: '0.2s' }}>
            <label>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
              <input type="email" className="auth-input" placeholder="you@example.com" style={{ paddingLeft: '2.5rem' }} />
            </div>
          </div>
          
          <div className="form-group slide-up" style={{ animationDelay: '0.3s' }}>
            <label>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)' }} />
              <input type="password" className="auth-input" placeholder="••••••••" style={{ paddingLeft: '2.5rem' }} />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary hover-lift fade-in" style={{ animationDelay: '0.4s', width: '100%', justifyContent: 'center' }}>
            {isLogin ? 'Sign In' : 'Sign Up'}
            <ArrowRight size={18} />
          </button>
        </form>
        
        <p className="auth-switch fade-in" style={{ animationDelay: '0.5s' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign up' : 'Sign in'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
