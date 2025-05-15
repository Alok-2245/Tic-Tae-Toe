import React, { useState, useEffect } from "react";
import Square from "./square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winnerData, setWinnerData] = useState(null);

  const checkWinner = () => {
    const logic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of logic) {
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return { winner: state[a], winningSquares: [a, b, c] };
      }
    }

    return null;
  };

  useEffect(() => {
    const result = checkWinner();
    if (result) {
      setWinnerData(result);
    }
  }, [state]);

  const handleClick = (index) => {
    if (state[index] || winnerData) return;
    const newState = [...state];
    newState[index] = isXTurn ? "X" : "O";
    setState(newState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
    setWinnerData(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>{winnerData ? `${winnerData.winner} wins!` : `Turn: ${isXTurn ? "X" : "O"}`}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", width: "180px", margin: "0 auto" }}>
        {state.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
            isWinning={winnerData?.winningSquares.includes(index)}
          />
        ))}
      </div>
      <button onClick={handleReset} style={{ marginTop: "15px" }}>
        Reset Game
      </button>
    </div>
  );
};

export default Board;
