import React, { useState }  from "react";
import { styled } from "styled-components";
import menuCategoryCard from "../modules/menuCategoryCard";
import Billing from "../modules/Billing";
import MenuCard from "../modules/MenuCard";




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
      ));
  };

  const handleDecrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      ));
  };


  


  return (
    <>
      <MenuContainer>



        <Input type="text" placeholder="Search.." />
        <MiddleSection>
          <TopDiv>{menuCategoryCard()}</TopDiv>
          <hr />
          
          
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
        </MiddleSection>
      </MenuContainer>
      <Billing
       items={items}
       onIncrement={handleIncrement}
       onDecrement={handleDecrement}
      />
    </>
  );
}

const MenuContainer = styled.div`
  height: 100%;
  /* overflow: hidden; */
  background-color: #000;
  position: fixed;
  left: 240px;
  padding-inline: 20px;
`;
const Input = styled.input`
  padding: 6px;
  border: none;
  margin-top: 30px;
  margin-left: 20px;
  font-size: 17px;
`;

const MiddleSection = styled.div``;

const TopDiv = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  margin-inline: auto;
  margin-block: 10px;
`;
const MiddleDiv = styled.div`
  width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  margin-inline: auto;
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
  border-bottom: none;
  align-items: center;
  justify-content: space-evenly;
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
  align-items: center;
  justify-content: center;
  background-color: #c9caee;
  border-radius: 5px;
`;
const InnerDiv2 = styled.div``;

const NameP = styled.p`
  margin-bottom: 0px;
  margin-top: 5px;
`;
const OrderP = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
`;