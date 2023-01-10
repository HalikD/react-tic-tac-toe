import React, { useState } from "react";
import Board from "./components/Board/Board";
import InfoBoard from "./components/InfoBoard/InfoBoard";
import MyButton from "./components/MyButton/MyButton";
import { WIN_CONDITIONS } from "./utils";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winIdxs, setWinIdxs] = useState([]);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [isDraw, setIsDraw] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleClick = (boxIdx) => {
    if (isGameOver) return;

    setBoard(
      board.map((value, idx) => {
        if (boxIdx === idx) return isXNext ? "X" : "O";
        return value;
      })
    );

    setIsXNext(!isXNext);
  };

  const checkWinner = () => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setIsGameOver(true);
        return [board[a], WIN_CONDITIONS[i]];
      }
    }
    return [null, null];
  };

  const checkDraw = () => {
    if (!board.includes(null)) {
      setIsDraw(true);
      setIsGameOver(true);
    }
  };

  const addScore = (player) => {
    if (player === "X") {
      setScores({ ...scores, xScore: scores.xScore + 1 });
    } else {
      setScores({ ...scores, oScore: scores.oScore + 1 });
    }
  };

  const restartGame = () => {
    setIsGameOver(false);
    setWinIdxs([]);
    setIsXNext(true);
    setIsDraw(false);
    setBoard(Array(9).fill(null));
  };

  const isGameEnd = () => {
    if (!isGameOver) {
      const [winner, winBoxes] = checkWinner();
      if (winner) {
        addScore(winner);
        setWinIdxs(winBoxes);
      } else {
        checkDraw();
      }
    }
  };

  isGameEnd();

  return (
    <div className="App">
      <InfoBoard
        isDraw={isDraw}
        scores={scores}
        isXNext={isXNext}
        isGameOver={isGameOver}
      />
      <Board board={board} winIdxs={winIdxs} onClick={handleClick} />
      <MyButton handler={restartGame}>RESTART</MyButton>
    </div>
  );
}

export default App;
