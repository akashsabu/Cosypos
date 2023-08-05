import React from 'react';

const CartItem = ({ item, onIncrement, onDecrement }) => {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <button onClick={() => onDecrement(item.id)}>-</button>
      <span>{item.count}</span>
      <button onClick={() => onIncrement(item.id)}>+</button>
      
      <span>${item.price.toFixed(2)}</span>
      <span>Total: ${(item.count * item.price).toFixed(2)}</span>
    </div>
  );
};

export default CartItem;
