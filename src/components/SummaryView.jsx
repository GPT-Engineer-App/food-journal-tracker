import React from 'react';

const SummaryView = ({ summary }) => {
  return (
    <div className="summary-view">
      <h2>Summary</h2>
      <ul className="summary-list">
        {summary.map((item, index) => (
          <li key={index} className="summary-item">
            {item.date}: {item.mealType} - {item.food}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryView;