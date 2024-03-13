import React from 'react';

function DishCard({ name, description, imageSrc, chin_ya_no_hay }) {
  return (
    <div className="dish-card">
      <h2>Perfil Card</h2>
      <img src={imageSrc} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{chin_ya_no_hay}</p>
    </div>
  );
}

export default DishCard;
