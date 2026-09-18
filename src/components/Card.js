import React from "react";
import "./Card.css";

export default function Card({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div>
      <div className="card">
        <img className="front" src={card.src} alt="Card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="Card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
