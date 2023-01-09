import React from "react";
import Box from "../Box/Box";

import "./Board.css";

const Board = ({ board, winIdxs, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        let isWinBox = false;
        if (winIdxs.includes(idx)) isWinBox = true;
        return (
          <Box
            key={idx}
            value={value}
            isWinBox={isWinBox}
            onClick={() => value === null && onClick(idx)}
          />
        );
      })}
    </div>
  );
};

export default Board;
