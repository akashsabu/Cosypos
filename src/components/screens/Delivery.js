import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

export default function Delivery() {
  return (
    <Div>
      <Helmet>
        <title>CosyPOS | Delivery</title>
      </Helmet>
      <main class="main">
        <section class="contact">
          <h1 class="title">CosyPOS</h1>
          <h2 class="sub-title">Delivery Site Under Construction</h2>
        </section>
      </main>
    </Div>
  );
}
const Div = styled.div`
  position: fixed;
  top: 0;
  overflow: hidden;
  left: 250px;
  height: 100%;
  width: 100vw;
  color: #ecf0f1;
  background: radial-gradient(ellipse at bottom, #111 0%, #090a0f 100%);
`;
