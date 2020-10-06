import React, { useState } from "react";

const initState = ["zohaib", "murshad"];

function ArrayUseState() {
  const [persons, setPersons] = useState(initState);

  const handleChange = () => {
    //persons.push("ali");
    // setPerson(newPerson);

    const newPersons = [...persons];
    newPersons.push("talha");
    newPersons.push("shah");

    setPersons(newPersons);
  };
  console.log("ObjectUseState Render");
  return (
    <div>
      <button onClick={handleChange}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
}

export default ArrayUseState;
