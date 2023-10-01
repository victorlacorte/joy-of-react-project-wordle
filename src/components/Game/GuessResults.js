import React from "react";

import Guess from "./Guess";

function GuessResults(props) {
  const { answer, guesses } = props;

  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess key={guess.id} answer={answer} guess={guess.label} />
      ))}
    </div>
  );
}

export default GuessResults;
