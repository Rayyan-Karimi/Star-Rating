import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => {
      const starValue = index + 1;
      const isFilled = starValue <= (hoverRating || rating);
      return (
        <span
          key={starValue}
          className={`star ${isFilled ? "filled" : ""}`}
          onMouseEnter={() => setHoverRating(starValue)}
          onMouseLeave={() => setHoverRating(rating)}
          onClick={() => setRating(starValue)}
        >
          &#9733;
        </span>
      );
    });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <StarRating />
        <div>
          {renderStars()}
          <div>
            <p>Your rating: {rating}</p>
            <p>Your hover rating: {hoverRating}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
