export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem }) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header d-flex j-content-s-between a-items-center">
          <h2>Tu Carrito</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <p className="empty-msg">Tu carrito está vacío en esta órbita... 🌌</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item d-flex j-content-s-between a-items-center">
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>{item.quantity}x - ${item.price.toFixed(2)}</p>
                </div>
                <button className="delete-btn" onClick={() => onRemoveItem(item.id)}>🗑️</button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="total-box d-flex j-content-s-between">
              <span>Total:</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={() => alert('¡Procesando orden galáctica! 🚀')}>
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </div>
  );
}