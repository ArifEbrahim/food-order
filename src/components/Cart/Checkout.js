import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isBlank = (value) => value.trim() === "";
const isEightChars = (value) => value.length === 8;

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postCode: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postCodeRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const city = cityRef.current.value;
    const postCode = postCodeRef.current.value;

    const isNameValid = !isBlank(name);
    const isStreetValid = !isBlank(street);
    const isCityValid = !isBlank(city);
    const isPostCodeValid = isEightChars(postCode);

    setFormValidity({
      name: isNameValid,
      street: isStreetValid,
      city: isCityValid,
      postCode: isPostCodeValid,
    });

    const formIsValid =
      isNameValid && isStreetValid && isCityValid && isPostCodeValid;

    if (formIsValid) {
      //submit data
    } else {
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.postCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postCode">Post Code</label>
        <input type="text" id="postCode" ref={postCodeRef} />
        {!formValidity.postCode && <p>Please enter a valid post code</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
