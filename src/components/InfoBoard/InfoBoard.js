import React from "react";
import "./InfoBoard.css";

const InfoBoard = ({ winner, scores, isXNext }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="infoboard">
      {winner ? (
        <span className="score score-win score-active">Winner: {winner}</span>
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
