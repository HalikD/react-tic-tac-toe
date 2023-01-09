import React from "react";
import "./Box.css";

const Box = ({ value, isWinBox, onClick }) => {
  let style = value === "X" ? "box box-x" : "box box-o";
  style += isWinBox ? " box-win" : "";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Box;
