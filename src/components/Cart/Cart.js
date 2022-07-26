import React from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart() {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => <l1>{item.name}</l1>
  );

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>12.34</span>
      </div>
      <div className={classes.actions}>
        <buton className={classes['button--alt']}>Close</buton>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
