import React, { useState } from "react";

const initState = {
  fname: "zohaib",
  lname: "murshad",
};
function ObjectUseState() {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    const newPerson = {
      ...person,
    };
    newPerson.fname = "talha";
    newPerson.lname = "shah";
    setPerson(newPerson);
  };
  console.log("ObjectUseState Render");
  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
}

export default ObjectUseState;
