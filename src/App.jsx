import { useState } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Categories from './components/categories';
import GamerZone from './components/gamerzone';
import ProductCard from './components/productcard';
import CartDrawer from './components/cartdrawer';

function App() {
  // Estado para controlar qué pestaña de filtro está activa
  const [activeTab, setActiveTab] = useState('Todo');
  
  // Estado para almacenar los productos agregados al carrito
  const [cart, setCart] = useState([]);
  
  // Estado para controlar la apertura y cierre del carrito lateral
  const [isCartOpen, setIsCartOpen] = useState(false);

const products = [
    { 
      id: 1, 
      name: "Vortex K9 Mechanical", 
      price: 129.99, 
      desc: "Interruptores silenciosos, chasis de aluminio.", 
      tag: "Populares", 
      img: "/images/vortexk9.jpg" 
    },
    { 
      id: 2, 
      name: "Nebula Tab Ultra", 
      price: 849.00, 
      desc: "Pantalla OLED 144Hz, procesador de última generación.", 
      tag: "Nuevos", 
      img: "/images/nebulatab.jpg" 
    },
    { 
      id: 3, 
      name: "Titan X Studio", 
      price: 199.50, 
      desc: "Cancelación de ruido activa, controladores de 50mm.", 
      tag: "Populares", 
      img: "/images/titanstudio.webp" 
    }
  ];

  // Función para añadir productos al carrito gestionando duplicados
  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Función para eliminar por completo un producto del carrito
  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Calcula la cantidad total de artículos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Lógica de filtrado en base a la pestaña seleccionada
  const filteredProducts = activeTab === 'Todo' 
    ? products 
    : products.filter(p => p.tag === activeTab);

  return (
    <>
      {/* Header con el contador total y la acción para abrir el carrito lateral */}
      <Header cartCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <Categories />
        <GamerZone />

        <section className="selection-section">
          <div className="container">
            <h2 className="section-title">Nuestra Selección</h2>
            
            {/* Control de pestañas de filtrado */}
            <div className="filter-tabs">
              {['Todo', 'Populares', 'Nuevos'].map(tab => (
                <button 
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Grid dinámico de productos */}
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  name={product.name}
                  price={`$${product.price}`}
                  desc={product.desc}
                  img={product.img}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Componente del Carrito Lateral Flotante */}
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