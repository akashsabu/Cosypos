import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function sideBar() {
  return (
    <SideNav>
      <ul>
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
      </ul>

      <Div>
        <Span>L</Span>{" "}
        Lesliya K
      </Div>
      <Div>
        <Span>C</Span>{" "} 
        Camaron W.
      </Div>
      <Div>
        <Span>J</Span>{" "} 
        Jacob J.
      </Div>
    </SideNav>
  );
}

const SideNav = styled.div`
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 200px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  padding-inline: 20px;
`;

const Logo = styled.span`
  width: 150px;
  display: inline-block;
  margin-block: 15px;
`;

const LogoImg = styled.img`
  display: block;
  width: 100%;
`;

const SideMenu = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  margin-bottom: 10px;
  border-radius: 3px;
  padding: 6px 20px 6px 6px;
  &:hover {
    background-color: #f1f1f1;
  }
`;
const Div = styled.div`
width: fit-content;
border: 2px solid #ccc;
background-color: #FFF;
  border-radius: 15px; 
  padding-block :3px ;
  padding-left: 10px;
  padding-right: 10px;
`;
const Span = styled.div`
  border-radius: 50%;  
  height: 25px;
  width: 25px;
  display: inline-flex;
  justify-content: center;

`;


