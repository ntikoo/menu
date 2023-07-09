import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button className="btn btn-container" onClick={() => handleClick(text)}>
      {text}
    </button>
  );
};

export default Button;
