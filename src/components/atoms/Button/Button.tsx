import React from 'react';
import '@/components/atoms/Button/Button.scss';

interface IButton {
  buttonText: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  variant?: 'prev' | 'next' | 'confirm';
}

export const Button: React.FC<IButton> = ({
  buttonText,
  type,
  onClick,
  className,
  variant
}) => {
  return (
    <button
      onClick={onClick}
      className={`main-btn ${className} ${variant ? 'btn-' + variant : ''}`}
      type={type}>
      {buttonText}
    </button>
  );
};
