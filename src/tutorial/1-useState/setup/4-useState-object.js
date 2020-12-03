import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Message String",
  });

  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Message String");

  const changeMessage = () => {
    if (name === "Peter") {
      setMessage("Hello World!");
      setAge(29);
      setName("Bobby");
    } else {
      setMessage("Message String");
      setAge(24);
      setName("Peter");
    }
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
