import React from "react";
import styled from "styled-components";
import plus from "../Asset/plus.svg";
import minus from "../Asset/minus.svg";
const Menu = ({ items, onAddToCart, onRemoveFromCart }) => {
  return (
    <>
      {items.map((item) => (
        <ItemDiv key={item.id}>
          <Span1>Orders &rarr; Kitchen </Span1>
          <ItemName>{item.name}</ItemName>
          <Span1>${item.price.toFixed(2)}</Span1>

          <CountDiv>
            <Button onClick={() => onRemoveFromCart(item.id)}>
              <img style={{ width: "15px" }} src={minus} alt="minus" />
            </Button>
            <CountSpan id>{item.count}</CountSpan>
            <Button onClick={() => onAddToCart(item.id)}>
              <img style={{ width: "15px" }} src={plus} alt="plus"/>
            </Button>
          </CountDiv>
        </ItemDiv>
      ))}
    </>
  );
};

export default Menu;

const ItemDiv = styled.div`
  height: 110px;
  width: 180px;
  color: aliceblue;
  border-radius: 5px;
  padding: 3px 10px 10px 10px;
  box-sizing: border-box;
  background-color: #2d2d2d;
  border-left: 10px solid #fac2d9;
`;

const Span1 = styled.p`
  margin: 0px;
  font-size: 12px;
  color: #8e8e8e;
`;
const ItemName = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Button = styled.div`
  height: 25px;
  width: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid aliceblue;
`;
const CountSpan = styled.p`
  width: 20px;
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const CountDiv = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: right;
`;
