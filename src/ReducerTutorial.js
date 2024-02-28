import React, { useState } from "react";

const ReducerTutorial = () => {
  // Initializing state variables using the useState hook
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // Updating count and toggling showText on button click
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click here
      </button>

      {/* Conditional rendering based on the value of showText */}
      {showText && <p>This is a text</p>}
    </div>
  );
};

// Exporting the ReducerTutorial component as the default export
export default ReducerTutorial;
