import styled from "styled-components";
import { React, useState } from "react";

const items = [
  {
    name: "Fish and Chips",
    price: 7.5,
  },
  {
    name: "Roast Chicken",
    price: 7.5,
  },
  {
    name: "Fillet Steak",
    price: 7.5,
  },
  {
    name: "Beef Steak",
    price: 7.5,
  },
  {
    name: "Roast Beef",
    price: 7.5,
  },
  {
    name: "Buffalo Wings",
    price: 7.5,
  },
  {
    name: "Lobster",
    price: 7.5,
  },
  {
    name: "Red Cavier",
    price: 10.5,
  },
];

export default function MenuItem() {
 
 
 
  const [num, setNum] = useState(0);



  let incNum = () => {
      setNum(num + 1);
    };
  
  let decNum = () => {
      setNum(num - 1);
  
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };



  return items.map((item) => (
    <ItemDiv>
      <span>Orders &rarr; Kitchen </span>
      <p>{item.name}</p>
      <span>{item.price}</span>

      <div >
        <button onClick={() =>incNum()}>+</button>
        <h2 id="counting">
          {num}
        </h2>
        <button onClick={() => decNum()}>-</button>
      </div>
    </ItemDiv>
  ));
}

const ItemDiv = styled.div`
  height: 100px;
  width: 170px;
  border-radius: 5px;
  padding: 15px 10px 10px 10px;
  box-sizing: border-box;
  background-color: #777;
`;
