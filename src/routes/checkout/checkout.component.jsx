import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addCartToItems } = useContext(CartContext);
  return (
    <div>
      Checkout
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br></br>
              <span>Decrement</span>
              <br></br>
              <span onClick={() => addCartToItems(cartItem)}>Increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
