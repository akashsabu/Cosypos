import React from "react";
import Cart from "./Cart";
import styled from "styled-components";

export default function Billing({ items, onIncrement, onDecrement }) {
  return (
    <BillingContainer>
      <CartContainer>
        <Cart
          items={items}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </CartContainer>




      <div className="total">
        Total: $
        {items
          .reduce((acc, item) => acc + item.count * item.price, 0)
          .toFixed(2)}
      </div>
    </BillingContainer>
  );
}
const BillingContainer = styled.div`
  width: 360px;
  height: 100%;
  /* overflow: hidden; */
  background-color: #000;
  position: fixed;
  right: 0px;
  top: 0%;
`;
const CartContainer = styled.div`
    height: 200px;
    width: 300px;
    margin: 20px auto;
    color: white;
    overflow-y: auto;
    background: #000;
    /* padding: 5px; */


`;
