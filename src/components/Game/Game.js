import React from "react";

import { charsPerGuess, allowedGuesses } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import HappyBanner from "./HappyBanner";
import SadBanner from "./SadBanner";
import Keyboard from "./Keyboard";

function generateInitialGuesses() {
  return Array.from({ length: allowedGuesses }, () => ({
    id: crypto.randomUUID(),
    label: " ".repeat(charsPerGuess),
  }));
}

function generateAnswer() {
  return sample(WORDS);
}

function Game() {
  const [answer, setAnswer] = React.useState(generateAnswer);
  const [guesses, setGuesses] = React.useState(generateInitialGuesses);
  const [numGuesses, setNumGuesses] = React.useState(0);

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const hasWon =
    numGuesses > 0 ? guesses[numGuesses - 1].label === answer : false;

  const hasLost = numGuesses == allowedGuesses;

  function setGuess(guess) {
    if (hasLost) return;

    const guessesCp = [...guesses];
    guessesCp[numGuesses].label = guess;

    setNumGuesses(numGuesses + 1);
    setGuesses(guessesCp);
  }

  function restart() {
    setAnswer(generateAnswer());
    setGuesses(generateInitialGuesses());
    setNumGuesses(0);
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput onSubmit={setGuess} isDisabled={hasWon || hasLost} />
      <Keyboard answer={answer} guesses={guesses} />
      {hasWon && <HappyBanner numGuesses={numGuesses} onRestart={restart} />}
      {hasLost && <SadBanner answer={answer} onRestart={restart} />}
    </>
  );
}

export default Game;
