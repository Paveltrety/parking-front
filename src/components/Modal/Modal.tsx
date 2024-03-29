import { FC, PropsWithChildren } from "react";

import styles from "./Modal.module.scss";

interface IModalProps {
  onClose: () => void;
}

export const Modal: FC<PropsWithChildren<IModalProps>> = ({
  children,
  onClose,
}) => {
  return (
    <div className={styles.root}>
      <button className={styles.closeButton} onClick={onClose}>X</button>
      {children}
    </div>
  );
};
