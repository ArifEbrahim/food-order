import React, { useContext } from "react";

import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export default function CartButton(props) {
  const ctx = useContext(CartContext);

  const numberOfItems = ctx.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}
