import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const checkSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h1>Window Dimensions</h1>
      <br />
      <h2>Width</h2>
      <h3>{width}px</h3>
      <h2>Height</h2>
      <h3>{height}px</h3>
    </>
  );
};

export default UseEffectCleanup;
