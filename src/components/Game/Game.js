import React from "react";

import { CHARS_PER_GUESS, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import HappyBanner from "./HappyBanner";
import SadBanner from "./SadBanner";

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

  const hasWon = guessIndex > 0 ? guesses[guessIndex - 1].label === answer : false;
  const hasLost = guessIndex == NUM_OF_GUESSES_ALLOWED;

  function setGuess(guess) {
    if (hasLost) return;

    const guessesCp = [...guesses];
    guessesCp[guessIndex].label = guess;

    setGuessIndex(guessIndex + 1);
    setGuesses(guessesCp);
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput onSubmit={setGuess} />
      {hasWon && <HappyBanner numGuesses={guessIndex} />}
      {hasLost && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
