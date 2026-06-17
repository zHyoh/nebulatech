export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="header bg-nebula">
      <div className="container d-flex j-content-s-between a-items-center nav">
        <h1 className="logo no-margin">Nebula Store</h1>
        <nav>
          <ul className="list d-flex g-8 no-margin">
            <li><a href="#" className="nav-link active">Inicio</a></li>
            <li><a href="#productos" className="nav-link">Productos</a></li>
            <li><a href="#" className="nav-link">Zona Gamer</a></li>
          </ul>
        </nav>
        <div className="d-flex g-4 a-items-center">
          <button
            onClick={onCartClick}
            className="icon-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', fontSize: '1.2rem' }}
          >
            🛒
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
          <span className="icon-link" style={{ cursor: 'pointer' }}>👤</span>
        </div>
      </div>
    </header>
  );
}