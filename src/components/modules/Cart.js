import React from "react";
import CartItem from "./CartItem";

const Cart = ({ items }) => {
  return (
    <div className="cart">
      {items.map((item) =>
        item.count > 0 ? <CartItem key={item.id} item={item} /> : null
      )}
    </div>
  );
};

export default Cart;
