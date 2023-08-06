import React from 'react'
import Cart from "./Cart";
import styled from  "styled-components"; 

export default function Billing({ items, onIncrement, onDecrement }) {
  return (

    <BillingContainer>
    <Cart
    items={items}
    onIncrement={onIncrement}
    onDecrement={onDecrement}
  /> 




  <div className="total">
        Total: ${items.reduce((acc, item) => acc + item.count * item.price, 0).toFixed(2)}
      </div>
  </BillingContainer>

   )
}
const BillingContainer = styled.div`
  width: 360px;
  height: 100%;
  /* overflow: hidden; */
  background-color: #775;
  position: fixed;
  right: 0px;
  top: 0%;
`;