import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const ctx = useContext(CartContext);

  const total = `£${ctx.total.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };

  const addItemHandler = (item) => {
    ctx.addItem({
      ...item,
      amount: 1,
    });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async(userData) => {
    await fetch(process.env.REACT_APP_POST_KEY, {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        order: ctx.items
      })
    })
  }

  const cartItems = ctx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={addItemHandler.bind(null, item)}
      onRemove={removeItemHandler.bind(null, item.id)}
    />
  ));

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClick={props.onHideCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{total}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onHideCart} onConfirm={submitOrderHandler} />}
      {!isCheckout && modalActions}
    </Modal>
  );
}
