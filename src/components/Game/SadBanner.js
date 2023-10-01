import React from "react";

function SadBanner(props) {
  const { answer, onRestart } = props;

  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={onRestart}>Try again</button>
    </div>
  );
}

export default SadBanner;
