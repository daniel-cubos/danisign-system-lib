import * as React from 'react';

import Button from '../Button/Button';
import styles from './ConfirmDialog.module.scss';

export interface ConfirmDialogProps {
  handleConfirm: () => void;
  handleCancel: () => void;
  title: string;
  description: string;
  btnConfirmText: string;
  btnCancelText: string;
  open: boolean;
  image: string;
}

function ConfirmDialog({
  open,
  handleCancel,
  handleConfirm,
  title,
  description,
  btnConfirmText,
  btnCancelText,
  image,
}: ConfirmDialogProps) {
  return (
    <>
      {open && (
        <div className={styles.container}>
          <div className={styles.dialog}>
            <img src={image} alt="icon" height={200} width={200} />

            <strong>{title}</strong>
            <p>{description}</p>
            <div>
              <Button
                variant="normal"
                colors="orange"
                onClick={handleCancel}
                width={268}
              >
                {btnCancelText}
              </Button>
              <Button
                variant="normal"
                colors="orange__outline"
                width={206}
                onClick={handleConfirm}
              >
                {btnConfirmText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfirmDialog;
