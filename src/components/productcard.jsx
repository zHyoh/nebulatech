export default function ProductCard(props) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{props.name}</h3>
          <span className="product-price"> ${props.price}</span>
        </div>
        <p className="product-description">{props.desc}</p>
        <button className="add-to-cart-btn" onClick={props.onAddToCart}>
          Añadir al Carrito
        </button>
      </div>
    </article>
  );
}