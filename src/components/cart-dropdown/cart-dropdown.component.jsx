import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          <>
            {cartItems.map((item) => {
              return <CartItem key={item.id} cartItem={item} />;
            })}
          </>
        ) : (
          <EmptyMessage> Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={checkoutHandler}>CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
