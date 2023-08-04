import styled from "styled-components";
import { React, useState } from "react";
import Counter from "./Counter";

const items = [
  {
    id: 1, name: "Fish and Chips", price: 7.5 },
  { id: 2, name: "Roast Chicken", price: 7.5 },
  { id: 3, name: "Fillet Steak", price: 7.5 },
  { id: 4, name: "Beef Steak", price: 7.5 },
  { id: 5, name: "Roast Beef", price: 7.5 },
  { id: 6, name: "Buffalo Wings", price: 7.5 },
  { id: 7, name: "Lobster", price: 7.5 },
  { id: 8, name: "Red Cavier", price: 10.5 },
];

export default function MenuItem() {
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

  return items.map((item) => (
    <ItemDiv key={item.id}>
      <span>Orders &rarr; Kitchen </span>
      <p>{item.name}</p>
      <span>{item.price}</span>
      <ItemCard />
    </ItemDiv>
  ));
}

const ItemDiv = styled.div`
  height: 100px;
  width: 170px;
  border-radius: 5px;
  padding: 15px 10px 10px 10px;
  box-sizing: border-box;
  background-color: #777;
`;
