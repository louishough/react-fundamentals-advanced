import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Is this the best title?");

  const handleClick = () => {
    if (text === "Is this the best title?") {
      setText("Or is this the best title?");
    } else setText("Is this the best title?");
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

//some rules that apply to all hooks:
//they all include USE
//Component must be TitleCase
//the hook must be in the function or the component body
