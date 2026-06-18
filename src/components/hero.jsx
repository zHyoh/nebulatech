export default function Hero() {
  const scrollToProducts = (e) => {
    e.preventDefault();
    const selectionSection = document.querySelector('.selection-section');
    if (selectionSection) {
      selectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero d-flex a-items-center">
      <div className="container hero-wrapper d-flex a-items-center">
        <div className="hero-content">
          <span className="hero-subtitle">Future Technology Now</span>
          <h2 className="hero-title">
            Eleva tu <span className="text-gradient">nivel</span>
          </h2>
          <p className="hero-description">
            Descubre la nueva frontera del rendimiento.
            Equipamiento de élite diseñado para los arquitectos del mañana.
          </p>
          <div className="hero-actions d-flex g-4">
            <a href="#" className="btn btn-primary" onClick={scrollToProducts}>
              Explorar Tienda
            </a>
            <a href="#" className="btn btn-secondary">Ver Novedades</a>
          </div>
        </div>
      </div>
    </section>
  );
}