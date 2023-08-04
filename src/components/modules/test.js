import React, { useState } from 'react'
import styled from "styled-components"


const items = [
    {
      name: "Fish and Chips",
      price: 7.50,
    },
    {
      name: "Roast Chicken",
      price: 7.50,
    },
    {
      name: "Fillet Steak",
      price: 7.50,
    },
    {
      name: "Beef Steak",
      price: 7.50,
    },
    {
      name: "Roast Beef",
      price: 7.50,
    },
    {
      name: "Buffalo Wings",
      price: 7.50,
    },
    {
      name: "Lobster",
      price: 7.50,
    },
    {
      name: "Red Cavier",
      price: 10.50,
    },
  ];


export default function Test() {

    let [num, setNum]= useState(0);



  return (
   
         items.map((item)=>(
        <ItemDiv>
            <span>Orders &rarr; Kitchen </span>
            <p>{item.name}</p>
            <span>{item.price}</span>        
        </ItemDiv>

    ))
  )
}

const ItemDiv = styled.div`
  height: 100px;
  width: 170px;
  border-radius: 5px;
  padding: 15px 10px 10px 10px;
  box-sizing: border-box;
  background-color: #777;
  `;