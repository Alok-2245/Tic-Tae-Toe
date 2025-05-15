import React from "react";

const Square = ({ value, onClick, isWinning }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        backgroundColor: isWinning ? "lightgreen" : "white",
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
        boxSizing: "border-box"
      }}
    >
      {value}
    </div>
  );
};

export default Square;
