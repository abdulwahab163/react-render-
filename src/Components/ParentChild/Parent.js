import React, { useState } from "react";
import MemoizedChild from "./Child";

export const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rancho");

  console.log("Parent Render!");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("rachordaas")}>Change name</button>
      <MemoizedChild name={name}></MemoizedChild>
    </div>
  );
};

export default Parent;
