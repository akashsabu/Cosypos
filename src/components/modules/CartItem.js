import React from "react";
import styled from "styled-components";

const CartItem = ({ item, onIncrement, onDecrement }) => {
  return (
    <CartItemDiv>
      <ItemName>{item.name}{" "}
      <ItemCount> x{item.count}</ItemCount>
      </ItemName>
     

      <span>${(item.count * item.price).toFixed(2)}</span>
    </CartItemDiv>
  );
};

export default CartItem;

const CartItemDiv = styled.div`
  height: 50px;
  width: 295px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2D2D2D;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 10px;
`;
const ItemName = styled.p`

`;
const ItemCount = styled.span`
  font-size: 14px;
  color: #8E8E8E;
`;



// 747474