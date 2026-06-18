export default function Categories() {
  const categoriesList = [
    { name: 'Componentes', img: './images/componentes.jpg' },
    { name: 'Periféricos', img: './images/perifericos.jpg' },
    { name: 'Laptops', img: './images/laptops.jpg' },
    { name: 'Monitores', img: './images/monitores.jpg' }
  ];

  const handleCategoryClick = (categoryName) => {
    console.log(`Filtrando la tienda por la categoría: ${categoryName}`);
  };

  return (
    <section className="categories container">
      <div className="category-grid d-flex j-content-s-between">
        {categoriesList.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            style={{ backgroundImage: `url('${cat.img}')`, cursor: 'pointer' }}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <div className="category-info d-flex a-items-center j-content-s-between">
              <span className="category-name">{cat.name}</span>
              <span className="category-arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}