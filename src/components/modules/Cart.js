import React from "react";
import CartItem from "./CartItem";

const Cart = ({ items, onIncrement, onDecrement }) => {
  return (
    <div className="cart">
      {/* <h2>Cart</h2> */}
      {items.map((item) =>
        item.count > 0 ? (
          <CartItem
            key={item.id}
            item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ) : null
      )}
      {/* <div className="total">
        Total: ${items.reduce((acc, item) => acc + item.count * item.price, 0).toFixed(2)}
      </div> */}
    </div>
  );
};

export default Cart;
