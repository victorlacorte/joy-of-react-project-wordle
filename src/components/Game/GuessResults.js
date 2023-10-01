import React from "react";

import Guess from "./Guess";

function GuessResults(props) {
  const { guesses } = props;

  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess key={guess.id} label={guess.label} />
      ))}
    </div>
  );
}

export default GuessResults;
