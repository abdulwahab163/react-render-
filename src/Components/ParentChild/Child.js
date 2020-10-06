import React from "react";

export const Child = () => {
  console.log("child render");
  return <div>Child Component</div>;
};
const MemoizedChild = React.memo(Child);
export default MemoizedChild;
