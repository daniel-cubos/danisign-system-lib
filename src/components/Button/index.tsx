import React, { HTMLAttributes } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'normal' | 'rounded';
};

function Button({ children, variant }: ButtonProps) {
  return <button className={variant}>{children || 'Click'}</button>;
}

export default Button;
