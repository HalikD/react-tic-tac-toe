import React from "react";
import "./InfoBoard.css";

const InfoBoard = ({ isDraw, scores, isXNext, isGameOver }) => {
  const { xScore, oScore } = scores;
  const result = (isDraw && "Draw!") || `Winner: ${isXNext ? "O" : "X"}`;
  return (
    <div className="infoboard">
      {isGameOver ? (
        <span className="score score-win score-active">{result}</span>
      ) : (
        <>
          <span className={`score score-x ${isXNext && "score-active"}`}>
            {xScore}
          </span>
          <span className={`score score-o ${!isXNext && "score-active"}`}>
            {oScore}
          </span>
        </>
      )}
    </div>
  );
};

export default InfoBoard;
