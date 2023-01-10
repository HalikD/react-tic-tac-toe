import React from "react";
import "./MyButton.css";

const MyButton = ({ handler, ...props }) => {
  return (
    <button className="resetBtn" onClick={handler}>
      {props.children}
    </button>
  );
};

export default MyButton;
