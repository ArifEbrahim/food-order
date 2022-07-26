import React from 'react';

import DUMMY_MEALS from './dummy-meals';
import classes from './AvailableMeals.module.css';

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>
        {mealsList}
      </ul>
    </section>
  )
}