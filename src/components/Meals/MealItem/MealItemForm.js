import React from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

export default function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <Input
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
      <button>+ Add</button>
    </form>
  );
}
