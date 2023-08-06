import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function sideBar() {
  return (
    <SideNav>
      <Ul>
        <li>
          <Logo>
            <Link to="/">
              {" "}
              <LogoImg src={require("../Asset/logo-full.svg").default} />{" "}
            </Link>
          </Logo>
        </li>
        <li>
          {" "}
          <SideMenu to="/PageNotFound">Reservation</SideMenu>
        </li>
        <li>
          {" "}
          <SideMenu to="/PageNotFound">Table Services</SideMenu>
        </li>
        <li>
          {" "}
          <SideMenu to="/menu">Menu</SideMenu>
        </li>
        <li>
          {" "}
          <SideMenu to="/PageNotFound">Delivery</SideMenu>
        </li>
        <li>
          {" "}
          <SideMenu to="/PageNotFound">Accounting</SideMenu>
        </li>
      </Ul>

      <Div>
        <Span style={{background:"#E4CDEE"}}>L</Span>{" "}
        Lesliya K
      </Div>
      <Div>
        <Span style={{background:"#C3E9DE"}}>C</Span>{" "} 
        Camaron W.
      </Div>
      <Div>
        <Span style={{background:"#FAC2D9"}}>J</Span>{" "} 
        Jacob J.
      </Div>


    </SideNav>
  );
}

const SideNav = styled.div`
  height: 100%;/*  Full-height: remove this if you want "auto" height */
  width: 200px; /* Set the width of the sidebar */
   position: fixed;/* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 10px;
  padding-inline: 25px;
`;

const Logo = styled.span`
  width: 200px;
  display: inline-block;
  margin-bottom: 15px;
`;

const LogoImg = styled.img`
  display: block;
  width: 100%;
`;

const Ul = styled.ul`
margin-bottom: 160px;
`;
const SideMenu = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  margin-bottom: 10px;
  border-radius: 3px;
  padding: 6px 10px 0px 6px;
  &:hover {
    background-color: #f1f1f1;
  }
`;
const Div = styled.div`
width: fit-content;
border: 1px solid #8E8E8E;
font-size: 16px;
background-color: transparent;
color: #d2d2d2;
  border-radius: 30px; 
  padding-inline: 10px;
  padding-block: 5px;
  margin-bottom: 10px;
  &:last-child{
    margin-bottom: 0px;
  }
`;
const Span = styled.div`
  border-radius: 50%;  
  height: 25px;
  width: 25px;
  color: #2d2d2d;
  display: inline-flex;
  justify-content: center;
  background: #000;

`;






