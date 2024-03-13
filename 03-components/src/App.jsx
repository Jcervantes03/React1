import React, { useState } from 'react';
import DishCard from './DishCard/DishCard';

function App() {
  const [showOutOfStock, setShowOutOfStock] = useState(false);

  const products = [
    { id: 1, name: "Plato 1", description: "Descripción del plato 1", inStock: true, image_src: "public/Cris.jpeg" },
    { id: 2, name: "Plato 2", description: "Descripción del plato 2", inStock: false, image_src: "public/Messi.jpeg" },
    { id: 3, name: "Plato 3", description: "Descripción del plato 3", inStock: true, image_src: "public/Haland.jpeg" }
  ];

  const toggleStock = () => {
    setShowOutOfStock(!showOutOfStock);
  };

  return (
    <div className="App">
      <button onClick={toggleStock}>
        {showOutOfStock ? "Mostrar todos los platos" : "Mostrar los platos en stock"}
      </button>
      {products.map(product => (
        (!showOutOfStock || product.inStock) &&
        <DishCard
          key={product.id}
          name={product.name}
          description={product.description}
          imageSrc={product.image_src}
          chin_ya_no_hay={product.inStock ? "Hay en stock" : "Sin stock"}
        />
      ))}
    </div>
  );
}

export default App;
