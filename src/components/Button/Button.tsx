import React, { HTMLAttributes } from 'react';
import '../../styles/global.css';
import '../../styles/test.scss';
import './styles.css';
import styles from './Button.module.scss';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'normal' | 'rounded';
  colors: 'orange' | 'white' | 'orange__outline';
};

function Button({ children, variant, colors, ...params }: ButtonProps) {
  return (
    <button className={`${styles[variant]} ${colors}`} {...params}>
      {children || 'Click'}
    </button>
  );
}

export default Button;
