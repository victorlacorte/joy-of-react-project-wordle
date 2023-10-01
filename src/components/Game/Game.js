import React from "react";

import { CHARS_PER_GUESS, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const initialGuesses = Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () => ({
  id: crypto.randomUUID(),
  label: " ".repeat(CHARS_PER_GUESS),
}));

function Game() {
  const [guesses, setGuesses] = React.useState(() => initialGuesses);
  const [guessIndex, setGuessIndex] = React.useState(0);

  function setGuess(guess) {
    if (guessIndex == NUM_OF_GUESSES_ALLOWED) return;

    const guessesCp = [...guesses];
    guessesCp[guessIndex].label = guess;

    setGuessIndex(guessIndex + 1);
    setGuesses(guessesCp);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onSubmit={setGuess} />
    </>
  );
}

export default Game;
