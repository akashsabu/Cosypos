import React from "react";
import { styled } from "styled-components";
import menuCategoryCard from "../modules/menuCategoryCard";
import MenuItem from "../modules/MenuItems";
export default function menu() {
  return (

    <>
    <MenuContainer>
      <Input type="text" placeholder="Search.." />
      <MiddleSection>
        <TopDiv>{menuCategoryCard()}</TopDiv>

        <hr />

        {MenuItem()}

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
  </>
  );
}

const MenuContainer = styled.div`
  width: calc(100% - 600px);
  height: 100%;
  /* overflow: hidden; */
  background-color: #555;
  position: fixed;
  left: 240px;
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
`;

const BottomDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100px;
`;
const TableDiv = styled.div`
  height: 100%;
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
`;
const OrderP = styled.p`
  margin-top: 5px;
`;

const BillingSide = styled.div``;
