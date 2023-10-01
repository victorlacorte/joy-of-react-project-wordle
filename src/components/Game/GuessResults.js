import React from "react";

function GuessResults(props) {
  const { guesses } = props;

  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p key={guess.id} className="guess">
          {guess.label}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
