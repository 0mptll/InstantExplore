// src/components/Card/Card.js
import React from 'react';
import './Card.css';

const Card = ({ image, title, description, onButtonClick }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onButtonClick}>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
