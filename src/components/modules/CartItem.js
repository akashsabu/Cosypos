import React from "react";
import styled from "styled-components";

const CartItem = ({ item }) => {
  return (
    <CartItemDiv>
      <ItemName>
        {item.name} <ItemCount> x{item.count}</ItemCount>
      </ItemName>
      <ItemTotal>${(item.count * item.price).toFixed(2)}</ItemTotal>
    </CartItemDiv>
  );
};
export default CartItem;

const CartItemDiv = styled.div`
  height: 45px;
  width: 295px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2d2d2d;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 10px;
`;
const ItemName = styled.p`
  color: #d2d2d2;
`;
const ItemCount = styled.span`
  font-size: 14px;
  color: #8e8e8e;
`;

const ItemTotal = styled.span`
  color: #d2d2d2;
`;
