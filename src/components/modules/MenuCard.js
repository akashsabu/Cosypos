import React from 'react';
import styled from 'styled-components';
import plus from "../Asset/plus.svg"
import minus from "../Asset/minus.svg"
const Menu = ({ items, onAddToCart, onRemoveFromCart }) => {
  return (
  <>
      {items.map((item) => (
        <ItemDiv key={item.id}>
        <Span1 align="justify">Orders &rarr; Kitchen </Span1>
         <ItemName>{item.name}</ItemName>
        <Span1>${item.price.toFixed(2)}</Span1>
       
        <div>
          <Button onClick={() => onRemoveFromCart(item.id)}> 
          <img style={{width:"20px"}} src={plus}/>  
          </Button>
          <span id>{item.count}</span>
          <Button onClick={() => onAddToCart(item.id)}> <img style={{width:"20px"}} src={minus}/>  </Button>
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
  color: aliceblue;
  border-radius: 5px;
  padding: 3px 10px 10px 10px;
  box-sizing: border-box;
  background-color: #2D2D2D;
  border-left: 10px solid #767;
`;

const Span1 = styled.p`
margin: 0px;
font-size: 12px;
color: #D2D2D2;
`;
const ItemName = styled.h5`
margin: 0px;
letter-spacing: 1px;
`;

const Button = styled.div`
height: 30px;
width: 30px;
display: inline-flex;
justify-content: center;
align-items: center;
border: 1px solid aliceblue;
`;
