import React from "react";
import { styled } from "styled-components";
import menuCategoryCard from "../modules/menuCategoryCard"
import MenuItem from "../modules/MenuItems"
export default function menu() {


  return (
    <MenuContainer>
      <Input type="text" placeholder="Search.." />
      <MiddleSection>
        <TopDiv>{menuCategoryCard()}</TopDiv>
        
        <hr/>
       
        {MenuItem()}

        <BottomDiv>
          <TableDiv>
            <InnerDiv>T4</InnerDiv>
            <NameSpan>Leslie K</NameSpan>
            <br/>
            <OrderSpan>6 items &rarr; Kitchen</OrderSpan>
          </TableDiv>
          <TableDiv>
            <InnerDiv>T4</InnerDiv>
            <NameSpan>Leslie K</NameSpan>
            <br/>
            <OrderSpan>6 items &rarr; Kitchen</OrderSpan>
          </TableDiv>
          <TableDiv>
            <InnerDiv>T4</InnerDiv>
            <NameSpan>Leslie K</NameSpan>
            <br/>
            <OrderSpan>6 items &rarr; Kitchen</OrderSpan>
          </TableDiv>
        </BottomDiv>
    
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


const BottomDiv = styled.div`

display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  `;
const TableDiv = styled.div`
display: flex;
border:1px solid #FFF;
align-items: center;
`;

const InnerDiv = styled.div`
display: inline-flex;
height:30px;
width:30px;
align-items:center;
justify-content: center;
background-color: #C9CAEE;
border-radius: 5px;

`;
const NameSpan = styled.span``;
const OrderSpan = styled.span``;



const BillingSide = styled.div``;

