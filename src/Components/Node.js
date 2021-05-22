import React from "react";
import "./Node.css";

const Node = ({ isStart, isEnd, row, col }) => {
  let selectCount = 0;

  const selectNode = () => {};

  const classes = isStart ? "node-start" : isEnd ? "node-end" : "";
  return (
    <div
      className={`node ${classes}`}
      id={`node-${row}-${col}`}
      onClick={selectNode}
    ></div>
  );
};

export default Node;
