import React from "react";
import Cart from "./Cart";
import "../../App.css";  
import styled from "styled-components";
import editSvg from "../Asset/Edit.svg";
import Cash from "../Asset/Dollar.svg";
import Debit from "../Asset/Credit.svg";
import Ewallet from "../Asset/Scan.svg";

export default function Billing({ items }) {
  var cost = items
    .reduce((acc, item) => acc + item.count * item.price, 0)
    .toFixed(2);
  var tot = (cost * 1 + cost * 0.1).toFixed(2);

  return (
    <>
    <BillingContainer>
      <TableDiv>
        <InnerDiv1>
          <TableNo>Table 5</TableNo>
          <TableName>Leslie K.</TableName>
        </InnerDiv1>
        <InnerDiv2>
          <img style={{ width: "25px" }} src={editSvg} />
        </InnerDiv2>
      </TableDiv>

      <CartContainer>
        {items.reduce((acc, item) => acc + item.count, 0) == 0
          ? "Your Order is Empty"
          : null}

        <Cart items={items} />
      </CartContainer>

      <PaymentDiv>
        <SubTotal>
          <InnerSpan1> Subtotal : </InnerSpan1>
          <InnerSpan2>${cost}</InnerSpan2>
        </SubTotal>
        <Tax>
          <InnerSpan1>Tax 10% : </InnerSpan1>
          <InnerSpan2>${(cost * 0.1).toFixed(2)}</InnerSpan2>
        </Tax>
        <Total>
          <InnerSpan1>Total :</InnerSpan1>
          <InnerSpan2>${tot}</InnerSpan2>
        </Total>

        <PaymentMethodDiv>
          <span>Payment Method</span>
          
          <PaymentInnerDiv>
           
              <PaymentCard>
                <Box>
                  <Img style={{ width: "30px" }} src={Cash} />
                </Box>
                Cash
              </PaymentCard>
              
              <PaymentCard>
                <Box>
                  <img style={{ width: "30px" }} src={Debit} />
                </Box>
                Debit Card
              </PaymentCard>
           
              <PaymentCard>
                <Box>
                  <Img style={{ width: "30px" }} src={Ewallet} />
                </Box>
                E-Wallet
              </PaymentCard>
            
          </PaymentInnerDiv>

          <Button>Place Order</Button>
        </PaymentMethodDiv>
      </PaymentDiv>
    </BillingContainer>
    </>
  );
}
const BillingContainer = styled.div`
  width: 100%;
  height: 100%;
  color:  #D2D2D2;
  /* overflow: hidden; */
  background-color: #000;
 
`;

const TableDiv = styled.div`
  height: 50px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const InnerDiv1 = styled.div``;
const TableNo = styled.p`
  margin: 0px;
`;
const TableName = styled.span`
  font-size: 12px;
  color: #8e8e8e;
`;

const InnerDiv2 = styled.div`
  height: 30px;
  width: 30px;
  display: inline-flex;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
`;

const CartContainer = styled.div`
  height: 150px;
  width: 300px;
  margin: 30px auto;
  color: white;
  overflow-y: auto;
`;
const PaymentDiv = styled.div`
  width: 295px;
  height: 300px;
  color:  #D2D2D2;
  background-color: #2D2D2D;
  border-radius: 7px;
  margin-inline: auto;
  padding: 10px;
  box-sizing: border-box;
`;
const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Tax = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Total = styled.div`
  display: flex;
  color: aliceblue;
  justify-content: space-between;
  border-top: 2px dashed  #D2D2D2;
  margin-top: 10px;
  padding-top: 5px;
`;
const InnerSpan1 = styled.span``;
const InnerSpan2 = styled.span``;

const PaymentMethodDiv = styled.div`
font-size: 12px;
margin-top: 40px;
padding-inline: 12px;
color: #8F8F8F;

`;
const PaymentCard = styled.div`
cursor: pointer;

`;
const PaymentInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  text-align: center;  
  color: #D2D2D2;
  padding-top: 5px;
`;
const Box = styled.div`
  height: 40px;
  width: 70px;
  display: flex;
  justify-content: center;
  border: 1px solid #D2D2D2;
  border-radius: 5px;
  &:hover{
    background: #808e8e8e;
}
`;
const Img = styled.img`

`;
const Button = styled.div`
width: 100%;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50px;
border: none;
font-size: 16px;
margin-inline: auto;
margin-top: 20px;
background:  #f1f1f1;
color: #000;
&:hover{
    cursor: pointer;
}
&:active{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
`;
