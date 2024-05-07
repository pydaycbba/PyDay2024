import React from 'react';

const ConductItem = ({ title, content, type, points }) => {
  return (
    <div className={`conduct-item ${type}`}>
      <h2>{title}</h2>
      <p>{content}</p>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConductItem;

