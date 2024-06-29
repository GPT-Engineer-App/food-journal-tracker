import React, { useState } from 'react';

const MealEntry = ({ onSave }) => {
  const [mealType, setMealType] = useState('');
  const [food, setFood] = useState('');

  const handleSave = () => {
    if (mealType && food) {
      onSave({ mealType, food });
      setMealType('');
      setFood('');
    }
  };

  return (
    <div className="meal-entry">
      <select
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
        className="meal-select"
      >
        <option value="">Select Meal</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      <input
        type="text"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        placeholder="What did you eat?"
        className="food-input"
      />
      <button onClick={handleSave} className="save-button">Save</button>
    </div>
  );
};

export default MealEntry;