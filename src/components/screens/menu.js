import React from "react";
import { styled } from "styled-components";
import categorySection from "../modules/menuCategory"
import MenuItem from "../modules/MenuItems"
import test from "../modules/test";

export default function menu() {


  return (
    <MenuContainer>
      <Input type="text" placeholder="Search.." />
      <MiddleSection>
        <TopDiv>{categorySection()}</TopDiv>
        <hr/>
        <MiddleDiv>{MenuItem()}</MiddleDiv>
        <BottomDiv></BottomDiv>
      </MiddleSection>
      <BillingSide></BillingSide>
    </MenuContainer>
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

const MiddleSection = styled.div`
`;
const TopDiv = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  margin-inline: auto;
`;

const MiddleDiv = styled.div`
width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  margin-inline: auto;
  `;
const BottomDiv = styled.div``;
const BillingSide = styled.div``;

