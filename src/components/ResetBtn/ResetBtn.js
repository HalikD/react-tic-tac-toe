import React from "react";
import "./ResetBtn.css";

const ResetBtn = ({ gameOver, resetBoard }) => {
  return (
    <button className="resetBtn" onClick={resetBoard}>
      {gameOver ? "NEW GAME" : "RESET"}
    </button>
  );
};

export default ResetBtn;
