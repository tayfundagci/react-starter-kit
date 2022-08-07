import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function Checkout() {
  const { items } = useContext(CartContext);
  return (
    <div className="checkout">
      <div className="shopping-bag">
        {items.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Checkout;
