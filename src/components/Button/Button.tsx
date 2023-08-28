import React, { HTMLAttributes } from 'react';
import '../../styles/global.scss';
import styles from './Button.module.scss';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'normal' | 'rounded';
  colors: 'orange' | 'white' | 'orange__outline';
  width: number;
};

function Button({ children, variant, colors, width, ...params }: ButtonProps) {
  return (
    <button
      style={{
        width: width ? `${width}px` : '100%',
      }}
      className={`${styles[variant]} ${styles[colors]}`}
      {...params}
    >
      {children || 'Click'}
    </button>
  );
}

export default Button;
