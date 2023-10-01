import React from "react";

function Guess(props) {
  const { label } = props;

  return (
    <p className="guess">
      {Array.from(label).map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
