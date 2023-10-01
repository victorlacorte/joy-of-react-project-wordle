import React from "react";

function GuessInput(props) {
  const { onSubmit, isDisabled } = props;

  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(guess);
    setGuess("");
  }

  function handleChange(e) {
    setGuess(String(e.target.value).toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5}"
        title="5 letter word"
        required={true}
        value={guess}
        disabled={isDisabled}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
