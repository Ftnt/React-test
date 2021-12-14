import React from "react";

const Line = ({ color }) => {
  return (
    <hr
      style={{
        backgroundColor: color,
        height: "1px",
        width: "80%",
        border: "none",
      }}
    />
  );
};

export default Line;
