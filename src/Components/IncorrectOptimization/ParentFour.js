import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rancho");

  const person = {
    fname: "google",
    lname: "baba",
  };

  const MemoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const MemoizedHandleClick = useCallback(handleClick, []);
  console.log("ParentFour Render!");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("rachordaas")}>Change name</button>
      <MemoizedChildFive
        name={name}
        // person={person} causes rerender because of new reference everytime
        person={MemoizedPerson}
        // handleClick={handleClick} causes rerender because of new reference everytime
        handleClick={MemoizedHandleClick}
      />
    </div>
  );
};

export default ParentFour;
