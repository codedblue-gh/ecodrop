import { ReactNode } from 'react';
import styles from './Label.module.scss';

interface LabelProps {
  children: ReactNode;
}

export const Label = ({ children }: LabelProps) => {
  return <span className={`${styles.label} _has-bg _has-tr`}>{children}</span>;
};
