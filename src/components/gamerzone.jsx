export default function GamerZone() {
  
  const showProductSpecs = (e, productName) => {
    e.preventDefault();
    alert(`⚡ Especificaciones de ${productName}:\n• Latencia: 0.5ms\n• Sensor: Óptico Nebula-Aura 26K DPI\n• Peso: 63g`);
  };

  return (
    <section className="gamer-zone container">
      <div className="section-header d-flex j-content-s-between a-items-center">
        <div>
          <h2 className="section-title">Zona Gamer</h2>
          <p className="section-tagline">Inmersión total con la mejor tecnología RGB y ergonomía de combate.</p>
        </div>
      </div>

      <div className="gamer-grid">
        <div className="gamer-card main-card">
          <div className="card-content">
            <span className="special-tag">SPECIAL EDITION</span>
            <h3 className="card-title">Nebula Pro Wireless</h3>
            <p className="card-text">Latencia cero, switches ópticos y una batería de 100 horas.</p>
            {/* Añadimos evento interactivo */}
            <a 
              href="#" 
              className="btn-outline" 
              onClick={(e) => showProductSpecs(e, "Nebula Pro Wireless")}
            >
              Ver Detalles
            </a>
          </div>
          <img src="/images/Mouse Pro.jpg" className="card-img-main" alt="Nebula Pro" />
        </div>

        <div className="gamer-card secondary-card">
          <div className="card-content">
            <h3 className="card-title">RGB Aura Desk</h3>
            <p className="card-text">Sincroniza toda tu habitación.</p>
          </div>
          <img src="/images/Setup RGB.jpg" className="card-img-side" alt="Setup RGB" />
        </div>

        <div className="mini-grid-container">
          <div 
            className="gamer-card mini-card d-flex a-items-center j-content-center"
            style={{ cursor: 'pointer' }}
            onClick={() => alert("🎧 Spatial Audio: Soporte Dolby Atmos y DTS:X integrado.")}
          >
            <div className="card-content t-center">
              <div className="icon-box icon-cyan">🎧</div>
              <h3 className="card-title-sm">Spatial Audio</h3>
              <p className="card-text-sm">Sonido 7.1 envolvente real.</p>
            </div>
          </div>

          <div 
            className="gamer-card mini-card d-flex a-items-center j-content-center"
            style={{ cursor: 'pointer' }}
            onClick={() => alert("🪑 Ergo-Series: Soporte lumbar magnético y reclinación de 180°.")}
          >
            <div className="card-content t-center">
              <div className="icon-box icon-purple">🪑</div>
              <h3 className="card-title-sm">Ergo-Series</h3>
              <p className="card-text-sm">Comodidad para maratones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}