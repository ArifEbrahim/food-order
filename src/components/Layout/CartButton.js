import React, { useContext, useEffect, useState } from "react";

import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export default function CartButton(props) {
  const [highlightBtn, setHighlightBtn] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const numberOfItems = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${highlightBtn ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHighlightBtn(true);
    const timer = setTimeout(() => {
      setHighlightBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}
