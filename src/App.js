import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [filled, setFilled] = useState(0);

  const handleMouseOver = (currClicked) => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
      if (index < currClicked) {
        star.classList.add("star-filled");
      } else {
        star.classList.remove("star-filled");
      }
    });
  };

  const handleMouseLeave = () => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
      if (index < filled) {
        star.classList.add("star-filled");
      } else {
        star.classList.remove("star-filled");
      }
    });
  };

  const handleRatingClick = (e) => {
    const currClicked = parseInt(e.target.dataset.index);
    setFilled(currClicked);

    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
      if (index < currClicked) {
        star.classList.add("star-filled");
      } else {
        star.classList.remove("star-filled");
      }
    });

    document.getElementById("count").innerText = `Rating Count: ${currClicked}`;
  };

  return (
    <div className="container">
      <h1>Star Rating Component</h1>
      <div
        className="star-container"
        id="star-container"
        onMouseLeave={handleMouseLeave}
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            className="star"
            data-index={index}
            onClick={handleRatingClick}
            onMouseOver={() => handleMouseOver(index)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <div id="count">Rating Count: {filled}</div>
    </div>
  );
}

