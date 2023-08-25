import * as React from 'react';

import ArrowBackImage from '../../assets/arrow-back.svg';
import styles from './NotificationDialog.module.scss';
import SuccessIcon from '../SuccessIcon/SuccessIcon';
import CautionIcon from '../CautionIcon/CautionIcon';

export interface NotificationDialogProps {
  type: 'success' | 'error';
  title: string;
  description: string;
  actionText?: string;
  handleClose?: () => void;
  handleNextLocation?: () => void;
}

function NotificationDialog({
  type,
  title,
  description,
  actionText,
  handleClose,
  handleNextLocation,
}: NotificationDialogProps) {
  function handleNavigate() {
    if (handleNextLocation) handleNextLocation();

    if (handleClose) handleClose();
  }
  return (
    <div className={styles.container}>
      <div className={styles.dialog}>
        <div style={{ height: '200px', width: '200px' }}>
          {type === 'success' ? <SuccessIcon /> : <CautionIcon />}
        </div>

        <strong>{title}</strong>
        <p>{description}</p>
        {handleNextLocation && (
          <div className={styles['next-location']}>
            <img
              src={ArrowBackImage}
              alt="arrow back"
              style={{ width: 12, height: 12 }}
            />

            <a href="#" onClick={handleNavigate}>
              {actionText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationDialog;
