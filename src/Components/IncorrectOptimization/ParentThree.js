import React, { useState } from "react";
import { ChildFour } from "./ChildFour";
//import MemoizedChildThree from "./ChildThree";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rancho");

  console.log("ParentThree Render!");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("rachordaas")}>Change name</button>
      <ChildFour name={name} />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello </strong>
      </MemoizedChildThree> */}
    </div>
  );
};

export default ParentThree;
