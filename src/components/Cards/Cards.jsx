import React from 'react';
import './Cards.css';

export default function Card({ title, cover, description }) {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}