import React, { useState } from "react";
import Board from "./components/Board/Board";
import InfoBoard from "./components/InfoBoard/InfoBoard";
import ResetBtn from "./components/ResetBtn/ResetBtn";
import { WIN_CONDITIONS } from "./utils";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winIdxs, setWinIdxs] = useState([]);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  let isWin = false;

  const handleClick = (boxIdx) => {
    if (gameOver) return;

    const updatedBoard = board.map((value, idx) => {
      if (boxIdx === idx) return isXNext ? "X" : "O";
      return value;
    });

    setBoard(updatedBoard);
    setIsXNext(!isXNext);

    checkWinner(updatedBoard);
    if (!isWin) checkDraw(updatedBoard);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        setWinner(board[a]);
        setWinIdxs([a, b, c]);
        addScore(board[a], scores);
        isWin = true;
      }
    }
  };

  const checkDraw = (board) => {
    if (gameOver) return;
    if (!board.filter((item) => item === null).length) {
      setGameOver(true);
      setWinner("No one!");
    }
  };

  const addScore = (player, scores) => {
    if (player === "X") {
      let { xScore } = scores;
      xScore++;
      setScores({ ...scores, xScore });
    } else {
      let { oScore } = scores;
      oScore++;
      setScores({ ...scores, oScore });
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setWinIdxs([]);
    setWinner(null);
    setIsXNext(true);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      <InfoBoard winner={winner} scores={scores} isXNext={isXNext} />
      <Board board={board} winIdxs={winIdxs} onClick={handleClick} />
      <ResetBtn gameOver={gameOver} resetBoard={resetBoard} />
    </div>
  );
}

export default App;
