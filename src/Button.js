import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("Click Me");

  return (
    <button onClick={() => setButtonText("Thanks")}>
      {buttonText}
    </button>
  );
}