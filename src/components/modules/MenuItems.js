import React, { useState } from 'react';
import Menu from './Menu';
import Cart from './Cart';

export default function MenuItems() {


  const [items, setItems] = useState([
    {
      id: 1,
      name: "Fish and Chips",
      price: 7.5,
      count: 0,
    },
    { id: 2, name: "Roast Chicken", price: 7.5, count: 0 },
    // { id: 3, name: "Fillet Steak", price: 7.5, count: 0 },
    // { id: 4, name: "Beef Steak", price: 7.5, count: 0 },
    // { id: 5, name: "Roast Beef", price: 7.5, count: 0 },
    // { id: 6, name: "Buffalo Wings", price: 7.5, count: 0 },
    // { id: 7, name: "Lobster", price: 7.5, count: 0 },
    // { id: 8, name: "Red Cavier", price: 10.5, count: 0 },
  ]);


  const handleIncrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
  };


  return (
    <div className="app">
    <Menu items={items} onAddToCart={handleIncrement} />
    <Cart items={items} onIncrement={handleIncrement} onDecrement={handleDecrement} />
  </div>
    
  )
}



