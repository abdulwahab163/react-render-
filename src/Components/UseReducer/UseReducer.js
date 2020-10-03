import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log("useReducer Render");
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
};

export default UseReducer;
