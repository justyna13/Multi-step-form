import React from "react";

interface IButton {
  buttonText: string;
  type?: "button" | "submit";
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({
  buttonText,
  type,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      type={type}>
      {buttonText}
    </button>
  )
}
