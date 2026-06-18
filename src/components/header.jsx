import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
        <div className="container nav-wrapper"> {/* Cambiamos la clase aquí */}
            
            {/* 1. Logo (Izquierda) */}
            <div className="logo-section">
                <div className="logo">NEBULA STORE</div> {/* Mayúsculas para look más pro, como ref */}
            </div>

            {/* 2. Sección del Menú Desplegable (Centro) */}
            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="list">
                    <li><a href="#inicio" className="nav-link active">Inicio</a></li>
                    <li><a href="#productos" className="nav-link">Productos</a></li>
                    <li><a href="#zonagamer" className="nav-link">Zona Gamer</a></li>
                    {/* Agregamos uno más para balancear, como en la ref */}
                    <li><a href="#soporte" className="nav-link">Soporte</a></li>
                </ul>
            </nav>

            {/* 3. Iconos y Hamburguesa (Derecha) */}
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
                    <a href="#cart" className="icon-link">🛒</a>
                    <a href="#profile" className="icon-link">👤</a>
                </div>
            </div>

        </div>
    </header>
  );
}