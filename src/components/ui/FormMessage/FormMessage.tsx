import { PropsWithChildren } from 'react';

import styles from './FormMessage.module.scss';

interface IFormMessageProps {
  message?: string;
  hideValidationText?: boolean;
}

export const FormMessage = ({ children, message, hideValidationText = false }: PropsWithChildren<IFormMessageProps>) => {
  return (
    <div className={styles.root}>
      {children}
      {!hideValidationText && !!message && <span className={styles.message}>{message}</span>}
    </div>
  );
};
