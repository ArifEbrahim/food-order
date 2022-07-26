 import React from 'react';

 import mealsImg from '../../assets/meals.jpg';
 import classes from './Header.module.css';
 import CartButton from './CartButton';
 
 export default function Header(props) {
   return (
     <>
      <header className={classes.header}>
        <h1>Just Munch</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='table of food'/>
      </div>
     </>
   )
 }
 