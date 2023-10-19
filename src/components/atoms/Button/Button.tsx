import React from "react";
import "@/components/atoms/Button/Button.scss";

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
      className={`main-btn ${className}`}
      type={type}>
      {buttonText}
    </button>
  )
}
