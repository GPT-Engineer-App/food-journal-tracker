import React, { useState } from 'react';
import MealEntry from './MealEntry';

const DayDetails = ({ date, meals, onSaveMeal }) => {
  const [mealEntries, setMealEntries] = useState(meals || []);

  const handleSaveMeal = (meal) => {
    const updatedMeals = [...mealEntries, meal];
    setMealEntries(updatedMeals);
    onSaveMeal(date, updatedMeals);
  };

  return (
    <div className="day-details">
      <h2>Details for {date.toDateString()}</h2>
      <MealEntry onSave={handleSaveMeal} />
      <ul className="meal-list">
        {mealEntries.map((meal, index) => (
          <li key={index} className="meal-item">
            {meal.mealType}: {meal.food}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayDetails;