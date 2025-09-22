
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  title: string;
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ title, currentLang, onLanguageChange }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header>
      <div className="logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}>
          <img src={require('../assets/logo.png')} alt="SA MedMatch Logo" />
          <div>
            <h1 id="title">{title}</h1>
            <p id="tagline" style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>
              Hablamos español &bull; Medicaid / Obamacare
            </p>
          </div>
        </Link>
      </div>
      
      <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link 
            to="/" 
            style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontWeight: isActive('/') ? '600' : '400',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              background: isActive('/') ? 'rgba(255,255,255,0.2)' : 'transparent',
              transition: 'background 0.2s'
            }}
          >
            Find Doctors
          </Link>
          <Link 
            to="/about" 
            style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontWeight: isActive('/about') ? '600' : '400',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              background: isActive('/about') ? 'rgba(255,255,255,0.2)' : 'transparent',
              transition: 'background 0.2s'
            }}
          >
            About Us
          </Link>
        </div>
        
        <select 
          id="language-switcher" 
          value={currentLang} 
          onChange={e => onLanguageChange(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '6px',
            border: '1px solid rgba(255,255,255,0.3)',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            fontSize: '0.9rem'
          }}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="ar">العربية</option>
          <option value="gu">ગુજરાતી</option>
          <option value="vi">Tiếng Việt</option>
          <option value="hi">हिन्दी</option>
          <option value="de">Deutsch</option>
          <option value="te">తెలుగు</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;