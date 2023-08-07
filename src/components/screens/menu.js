import React, { useState } from "react";
import { styled } from "styled-components";
import menuCategoryCard from "../modules/menuCategoryCard";
import Billing from "../modules/Billing";
import MenuCard from "../modules/MenuCard";
import  search  from '../Asset/search.svg';

export default function Menu() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Fish and Chips",
      price: 7.5,
      count: 0,
    },
    { id: 2, name: "Roast Chicken", price: 7.5, count: 0 },
    { id: 3, name: "Fillet Steak", price: 7.5, count: 0 },
    { id: 4, name: "Beef Steak", price: 7.5, count: 0 },
    { id: 5, name: "Roast Beef", price: 7.5, count: 0 },
    { id: 6, name: "Buffalo Wings", price: 7.5, count: 0 },
    { id: 7, name: "Lobster", price: 7.5, count: 0 },
    { id: 8, name: "Red Cavier", price: 10.5, count: 0 },
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
        item.id === itemId && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <Div>
      <MenuContainer>
        <Form>
          <img style={{width:"20px"}} src={search} alt="search"/>
          <Input type="text" placeholder="Search.." />
        </Form>

          <TopDiv>{menuCategoryCard()}</TopDiv>

          <MiddleDiv>
            <MenuCard
              items={items}
              onAddToCart={handleIncrement}
              onRemoveFromCart={handleDecrement}
            />
          </MiddleDiv>

          <BottomDiv>
            <TableDiv>
              <InnerDiv1>T4</InnerDiv1>
              <InnerDiv2>
                <NameP>Leslie K</NameP>
                <OrderP>6 items &rarr; Kitchen</OrderP>
              </InnerDiv2>
            </TableDiv>

            <TableDiv>
              <InnerDiv1>T4</InnerDiv1>
              <InnerDiv2>
                <NameP>Leslie K</NameP>
                <OrderP>6 items &rarr; Kitchen</OrderP>
              </InnerDiv2>
            </TableDiv>

            <TableDiv>
              <InnerDiv1>T4</InnerDiv1>
              <InnerDiv2>
                <NameP>Leslie K</NameP>
                <OrderP>6 items &rarr; Kitchen</OrderP>
              </InnerDiv2>
            </TableDiv>
          </BottomDiv>
    
      </MenuContainer>
      <BillingContainer>
        <Billing
        items={items}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      </BillingContainer>
      
    </Div>
  );
}
const Div = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: space-evenly;
position: fixed;
left: 250px;
background: #000;
padding-right: 10px;

`;

const MenuContainer = styled.div`
  height: 100%;
  background-color: #000;
  padding: 30px;
  box-sizing: border-box;
`;

const Form = styled.div`
width: 250px;
height: 35px;
  color: #d2d2d2;
  display: flex;
  border-radius: 2px;
  background: #2d2d2d;
  padding-inline: 10px;
  box-sizing: border-box;
  margin-bottom: 30px;

`;
const Input = styled.input`
width: 100%;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  background: transparent;
  outline: none;
  border: none;
  color: #d2d2d2;

`;

const TopDiv = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin-inline: auto;
  margin-block: 20px;
`;
const MiddleDiv = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;

  margin-inline: auto;
  padding-block: 20px;
  border-top: 1px solid #d2d2d2;
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: #8e8e8e;
  padding-block: 10px;
`;
const TableDiv = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #fff;
  align-items: center;
  justify-content: space-evenly;
  padding-block:10px ;
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
`;

const InnerDiv1 = styled.div`
  display: inline-flex;
  height: 35px;
  width: 35px;
  color: #2d2d2d;
  align-items: center;
  justify-content: center;
  background-color: #c9caee;
  border-radius: 5px;
`;
const InnerDiv2 = styled.div``;

const NameP = styled.p`
   margin-block: 0px;
   font-size: 16px;


`;
const OrderP = styled.p`
  margin-block: 0px;
  font-size: 12px;
`;

const BillingContainer = styled.div``;
