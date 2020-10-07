import React from "react";

export const ChildFive = ({ name, props }) => {
  console.log("Childfive render");
  return <div>hello - {name}</div>;
};

export const MemoizedChildFive = React.memo(ChildFive);
