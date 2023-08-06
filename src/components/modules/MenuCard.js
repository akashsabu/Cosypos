import React from 'react';
import styled from 'styled-components';
const Menu = ({ items, onAddToCart, onRemoveFromCart }) => {
  return (
  <>
      {items.map((item) => (
        <ItemDiv key={item.id}>
        <p>{item.name}</p>
        <span>${item.price.toFixed(2)}</span>
        <div>
          <button onClick={() => onRemoveFromCart(item.id)}>- </button>
          <span id>{item.count}</span>
          <button onClick={() => onAddToCart(item.id)}>+</button>
        </div>
      </ItemDiv>
      ))}
</>
  );
};

export default Menu;

const ItemDiv = styled.div`
  height: 120px;
  width: 170px;
  border-radius: 5px;
  padding: 15px 10px 10px 10px;
  box-sizing: border-box;
  background-color: #777;
`;

