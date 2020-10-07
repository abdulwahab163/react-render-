import React, { useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rancho");

  const person = {
    fname: "google",
    lname: "baba",
  };

  const handleClick = () => {};
  console.log("ParentFour Render!");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("rachordaas")}>Change name</button>
      <MemoizedChildFive
        name={name}
        person={person}
        handleClick={handleClick}
      />
    </div>
  );
};

export default ParentFour;
