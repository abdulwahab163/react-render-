import React from "react";
import "./App.css";
import Parent from "./Components/ParentChild/Parent";
//import ObjectUseState from "./Components/ImmutableState/ObjectUseState";
//import UseState from "./Components/UseState/UseState";
//import UseReducer from "./Components/UseReducer/UseReducer";
//import ArrayUseState from "./Components/ImmutableState/ArrayUseState";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      <Parent></Parent>
    </div>
  );
}

export default App;
