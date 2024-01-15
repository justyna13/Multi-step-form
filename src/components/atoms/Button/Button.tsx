import React from 'react';
import '@/components/atoms/Button/Button.scss';

interface IButton {
  buttonText: string;
  type?: 'button' | 'submit';
  testid?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'prev' | 'next' | 'confirm';
}

export const Button: React.FC<IButton> = ({
  buttonText,
  testid,
  type,
  onClick,
  className,
  variant
}) => {
  return (
    <button
      data-testid={testid}
      onClick={onClick}
      className={`main-btn ${className} ${variant ? 'btn-' + variant : ''}`}
      type={type}>
      {buttonText}
    </button>
  );
};
