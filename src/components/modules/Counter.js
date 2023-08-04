
import React, { useState } from 'react';


const ItemCard = ({ itemName }) => {
    const [quantity, setQuantity] = useState(0);
  
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };
  
    return (
      <div className="item-card">
        <h2>{itemName}</h2>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span id={itemName}>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    );
  };

export default function Counter(e) {
  return (
    <div className="App">
    {
      <ItemCard key={e} />
      
    }
  </div> 
   );
}



