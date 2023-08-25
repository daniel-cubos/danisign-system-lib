import * as React from 'react';

import styles from './Chip.module.scss';

export interface ChipProps {
  title: string;
  color?: string;
  textColor?: string;
  type?: 'filled' | 'outlined';
  width: number;
}

function Chip({
  title,
  color = '#fa7436',
  type = 'filled',
  textColor = 'white',
  width,
  ...params
}: ChipProps) {
  const style =
    type === 'filled'
      ? { backgroundColor: color, color: textColor }
      : { color: color, border: `1px solid ${color}` };

  return (
    <div
      className={styles.chip}
      style={{ ...style, width: width ? `${width}px` : '100%' }}
      {...params}
    >
      {title}
    </div>
  );
}

export default Chip;
