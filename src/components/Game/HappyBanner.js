import React from "react";

function HappyBanner(props) {
  const { numGuesses, onRestart } = props;

  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numGuesses == 1 ? "1 guess" : `${numGuesses} guesses`}</strong>
        .
      </p>
      <button onClick={onRestart}>Play again</button>
    </div>
  );
}

export default HappyBanner;
