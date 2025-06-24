import { Link } from 'react-router-dom';
import styles from './ArticleSM.module.scss';
import { AngleArrowIcon } from '../icons/AngleArrow';

interface ArticleSMProps {
  src: string;
  heading: string;
  txt: string;
  link: string;
}

export const ArticleSM = ({ src, heading, txt, link }: ArticleSMProps) => {
  return (
    <li className={`${styles.article} _has-bg _has-tr`}>
      <Link to={link} className={styles.inner}>
        <div className={styles.imageWrap}>
          <img
            className={styles.image}
            loading='lazy'
            src={src}
            alt={heading}
          />
        </div>
        <div className={styles.content}>
          <span className={styles.heading}>{heading}</span>
          <p className={styles.txt}>{txt}</p>
        </div>
        <span className={styles.arrow}>
          <AngleArrowIcon />
        </span>
      </Link>
    </li>
  );
};
