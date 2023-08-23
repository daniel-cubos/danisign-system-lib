import React, { HTMLAttributes } from 'react';
import '../styles/global.css';
import './styles.css';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'normal' | 'rounded';
  colors: 'orange' | 'white' | 'orange__outline';
};

function Button({ children, variant, colors }: ButtonProps) {
  return (
    <button className={`${variant} ${colors}`}>{children || 'Click'}</button>
  );
}

export default Button;
