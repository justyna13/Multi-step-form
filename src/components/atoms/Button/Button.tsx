import React from "react";

interface IButton {
  buttonText: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<IButton> = ({
  buttonText,
  type,
  onClick,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}>
      {buttonText}
    </button>
  )
}
