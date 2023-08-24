import React, { HTMLAttributes } from 'react';
import '../../styles/global.scss';
import styles from './InputText.module.scss';

export type InputTextProps = HTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  labelId?: string;
  width: string;
  height?: string;
};

function Input({
  children,
  labelText,
  width,
  height,
  labelId,
  ...params
}: InputTextProps) {
  return (
    <div
      className={styles['container-input']}
      style={{ width: width ? `${width}px` : '100%' }}
    >
      {labelText && <label htmlFor={labelId}>{labelText}</label>}
      <input
        id={labelId}
        {...params}
        style={{
          height: height ? `${height}px` : '66.155px',
        }}
      />
    </div>
  );
}

export default Input;
