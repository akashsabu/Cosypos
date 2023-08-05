import React from 'react';

const Menu = ({ items, onAddToCart }) => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      {items.map((item) => (
        <div key={item.id} className="menu-item">
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
          <button onClick={() => onAddToCart(item.id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
