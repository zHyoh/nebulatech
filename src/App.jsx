import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Categories from './components/categories';
import GamerZone from './components/gamerzone';
import ProductCard from './components/productcard';
import CartDrawer from './components/cartdrawer';

function App() {
  const [activeTab, setActiveTab] = useState('Todo');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    // --- CATEGORÍA: POPULARES ---
    { id: 1, name: "Vortex K9 Mechanical", price: 129.99, desc: "Interruptores silenciosos, chasis de aluminio aeroespacial.", tag: "Populares", img: `./images/vortexk9.jpg` },
    { id: 3, name: "Titan X Studio Pro", price: 199.50, desc: "Cancelación de ruido activa híbrida y controladores de 50mm.", tag: "Populares", img: `./images/titanstudio.webp` },
    { id: 5, name: "Nebula Blade 15", price: 1399.00, desc: "RTX 4070, Core i7, pantalla OLED de 240Hz para gaming extremo.", tag: "Populares", img: `./images/nebula-pro.jpg` },
    { id: 7, name: "Quantum Grip Mouse", price: 89.99, desc: "Switches ópticos ultraligeros de tercera generación, 26k DPI.", tag: "Populares", img: `./images/quantum-mouse.jpg` },
    { id: 9, name: "Apex Mechanical Mini", price: 109.99, desc: "Formato 60%, switches amarillos lineales lubricados de fábrica.", tag: "Populares", img: `./images/apex-mechanical.jpg` },
    { id: 11, name: "Spectra Pro Headset", price: 159.99, desc: "Almohadillas de gel refrigerante y micrófono de estudio extraíble.", tag: "Populares", img: `./images/spectra-headset.webp` },
    { id: 13, name: "Nebula Book Carbon", price: 1199.00, desc: "Chasis de fibra de carbono ultra delgado, batería de 18 horas.", tag: "Populares", img: `./images/nebula-carbon.webp` },
    { id: 15, name: "Hyperion Core GPU", price: 699.99, desc: "Arquitectura avanzada de trazado de rayos y 16GB VRAM GDDR6X.", tag: "Populares", img: `./images/hyperion-core.webp` },

    // --- CATEGORÍA: NUEVOS ---
    { id: 2, name: "Nebula Tab Ultra", price: 849.00, desc: "Pantalla OLED de 144Hz, procesador cuántico de última generación.", tag: "Nuevos", img: `./images/nebulatab.jpg` },
    { id: 4, name: "Aura Monitor 4K Ultra", price: 449.99, desc: "Panel IPS curvo de 32 pulgadas, tiempo de respuesta de 1ms GtG.", tag: "Nuevos", img: `./images/aura-monitor.webp` },
    { id: 6, name: "Chronos Desk Pad", price: 34.99, desc: "Superficie de tela optimizada para sensores y costuras reforzadas.", tag: "Nuevos", img: `./images/chronos-deskpad.jpg` },
    { id: 8, name: "Vanguard RTX Block", price: 899.99, desc: "Tarjeta gráfica con bloque de refrigeración líquida integrado de fábrica.", tag: "Nuevos", img: `./images/vanguard-rtx.webp` },
    { id: 10, name: "Horizon Pro Display", price: 529.99, desc: "Monitor ultrawide de 34 pulgadas con certificación HDR600.", tag: "Nuevos", img: `./images/horizon-pro.jpg` },
    { id: 12, name: "Orion Mech TKL", price: 145.00, desc: "Distribución ISO, iluminación RGB por tecla configurable por software.", tag: "Nuevos", img: `./images/orion-tech.jpg` },
    { id: 14, name: "Synapse Glide Mouse", price: 95.00, desc: "Base de teflón puro al 100% para un deslizamiento sin fricción.", tag: "Nuevos", img: `./images/synapse-glide.jpg` },
    { id: 16, name: "Nebula Pad Stream", price: 229.99, desc: "Controlador táctil modular con 15 macro-teclas LED personalizables.", tag: "Nuevos", img: `./images/nebula-pad-stream.jpg` }
  ];

  // Lógica de Filtrado por botones
  const filteredProducts = activeTab === 'Todo'
    ? products
    : products.filter(p => p.tag === activeTab);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Header cartCount={totalItems} onCartClick={() => setIsCartOpen(true)} />

      <main>
        <Hero />
        <Categories />
        <GamerZone />

        {/* SECCIÓN DEL CATÁLOGO INTERACTIVO */}
        <section id="productos" className="selection-section container">
          <div className="section-header-flex d-flex j-content-s-between a-items-center">
            <h2 className="section-title no-margin">Nuestra Selección</h2>

            {/* BOTONES DE FILTRADO INTERACTIVOS */}
            <div className="filter-buttons d-flex g-3">
              {['Todo', 'Populares', 'Nuevos'].map((tab) => (
                <button
                  key={tab}
                  className={`btn-filter ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* GRID CONFIGURADO PERFECTAMENTE */}
          <div className="products-clean-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                desc={product.desc}
                img={product.img}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </section>
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
      />
    </>
  );
}

export default App;