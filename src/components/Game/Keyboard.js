import React from "react";

import { keyboard } from "../../constants";
import { checkGuess } from "../../game-helpers";

function getStatusByLetter(guesses, answer) {
  const statusMap = new Map();

  guesses.forEach((guess) => {
    const checked = checkGuess(guess, answer);

    checked.forEach(({ letter, status }) => {
      statusMap.set(letter, status);
    });
  });

  return statusMap;
}

function Keyboard(props) {
  const { answer, guesses } = props;

  const statusMap = getStatusByLetter(
    guesses.map((guess) => guess.label),
    answer
  );

  return (
    <div className="keyboard">
      {keyboard.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`letter ${statusMap.get(letter) ?? ""}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
