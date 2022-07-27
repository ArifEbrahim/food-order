import React, { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

export default function MealItemForm(props) {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (!enteredAmount || enteredAmount < 1 || enteredAmount > 10) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmount)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label={"Amount"}
        input={{
          type: "number",
          id: `amount_${props.id}`,
          min: "0 ",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1-10).</p>}
    </form>
  );
}
