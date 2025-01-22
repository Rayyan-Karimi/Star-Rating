import { useState } from "react";
import "../App.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => {
      const item = index + 1;
      const isFilled = item <= (hoverRating || rating);

      return (
        <span
          key={item}
          className={`star ${isFilled ? "filled" : ""}`}
          onMouseEnter={() => setHoverRating(item)}
          onMouseLeave={() => setHoverRating(rating)}
          onClick={() => setRating(item)}
        >
          ★
        </span>
      );
    });
  };

  return (
    <div className="star-rating">
      {renderStars()}
      <p>Your rating: {rating}</p>
      <p>Your hover rating: {hoverRating}</p>
    </div>
  );
};

export default StarRating;
