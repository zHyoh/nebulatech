import React, { useState } from 'react';

export default function Header({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
        <div className="container nav-wrapper">
            
            <div className="logo-section">
                <div className="logo">NEBULA STORE</div>
            </div>

            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="list">
                    <li><a href="#inicio" className="nav-link active" onClick={() => setMenuOpen(false)}>Inicio</a></li>
                    <li><a href="#productos" className="nav-link" onClick={() => setMenuOpen(false)}>Productos</a></li>
                    <li><a href="#zonagamer" className="nav-link" onClick={() => setMenuOpen(false)}>Zona Gamer</a></li>
                    <li><a href="#soporte" className="nav-link" onClick={() => setMenuOpen(false)}>Soporte</a></li>
                </ul>
            </nav>

            <div className="header-actions">
                <button 
                    className={`hamburger ${menuOpen ? 'is-active' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className="icon-group">
                    <button onClick={onCartClick} className="icon-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, position: 'relative' }}>
                        🛒 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                    <a href="#profile" className="icon-link">👤</a>
                </div>
            </div>

        </div>
    </header>
  );
}