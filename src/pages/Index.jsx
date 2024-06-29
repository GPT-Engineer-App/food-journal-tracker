import React, { useState } from 'react';
import CalendarView from '../components/CalendarView';
import DayDetails from '../components/DayDetails';
import SummaryView from '../components/SummaryView';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [meals, setMeals] = useState({});
  const [view, setView] = useState('calendar');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setView('dayDetails');
  };

  const handleSaveMeal = (date, mealEntries) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [date.toDateString()]: mealEntries,
    }));
  };

  const getSummary = () => {
    const summary = [];
    for (const [date, mealEntries] of Object.entries(meals)) {
      mealEntries.forEach((meal) => {
        summary.push({ date, ...meal });
      });
    }
    return summary;
  };

  return (
    <div className="app-container">
      {view === 'calendar' && <CalendarView onDateChange={handleDateChange} />}
      {view === 'dayDetails' && (
        <DayDetails
          date={selectedDate}
          meals={meals[selectedDate.toDateString()]}
          onSaveMeal={handleSaveMeal}
        />
      )}
      <button onClick={() => setView('calendar')} className="view-button">Calendar View</button>
      <button onClick={() => setView('summary')} className="view-button">Summary View</button>
      {view === 'summary' && <SummaryView summary={getSummary()} />}
    </div>
  );
};

export default Index;