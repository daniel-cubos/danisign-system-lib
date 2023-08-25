import * as React from 'react';

import Button from '../Button/Button';
import CautionIcon from '../CautionIcon/CautionIcon';
import SuccessIcon from '../SuccessIcon/SuccessIcon';
import styles from './ConfirmDialog.module.scss';

export interface ConfirmDialogProps {
  handleConfirm: () => void;
  handleCancel: () => void;
  title: string;
  description: string;
  btnConfirmText: string;
  btnCancelText: string;
  open: boolean;
  type?: 'caution' | 'success';
}

function ConfirmDialog({
  open,
  handleCancel,
  handleConfirm,
  title,
  description,
  btnConfirmText,
  btnCancelText,
  type = 'caution',
}: ConfirmDialogProps) {
  return (
    <>
      {open && (
        <div className={styles.container}>
          <div className={styles.dialog}>
            <div style={{ height: '200px', width: '200px' }}>
              {type === 'success' ? <SuccessIcon /> : <CautionIcon />}
            </div>

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
