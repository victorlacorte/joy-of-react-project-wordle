import React from "react";

import { checkGuess } from "../../game-helpers";

function Guess(props) {
  const { guess, answer } = props;

  const checked = checkGuess(guess, answer);

  return (
    <p className="guess">
      {Array.from(guess).map((letter, index) => {
        const status = letter === " " ? "" : checked[index].status;

        return (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
