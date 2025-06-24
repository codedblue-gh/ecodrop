import { ReactNode } from 'react';
import styles from './Heading.module.scss';

interface HeadingProps {
  tag: 'h1' | 'h2';
  children: ReactNode;
}

export const Heading = ({ tag, children }: HeadingProps) => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.heading}>{children}</h1>;
      break;
    case 'h2':
      return <h2 className={styles.heading}>{children}</h2>;
      break;
    default:
      return <></>;
  }
};
