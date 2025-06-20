import { useState } from 'react';
import styles from './Menu.module.scss';
import { GlobeIcon } from '../ui/icons/GlobeIcon';
import { AccountIcon } from '../ui/icons/AccountIcon';

interface MenuProps {
  reference: React.RefObject<HTMLDivElement | null>;
}

export const Menu = ({ reference }: MenuProps) => {
  const [lang, setLang] = useState<'EN' | 'RU'>('EN');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNavLink = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const getSubItems = (label: string): string[] => {
    if (label === 'Products') {
      return ['Bags', 'Ecoboxes', 'Vegan', 'Clothes', 'Gifts', 'Recycled'];
    } else if (label === 'About us') {
      return ['Our story', 'Blog', 'Careers', 'Partners'];
    } else if (label === 'Support') {
      return ['Delivery', 'Find a partner', 'Returns'];
    }
    return [];
  };

  return (
    <div ref={reference} className={`${styles.menu}  menu`}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <ul className={styles.nav}>
            {['Products', 'About us', 'Support'].map((label, index) => (
              <li
                key={label}
                className={`${styles.navItem} ${
                  activeIndex !== null && activeIndex !== index
                    ? styles.inactive
                    : ''
                }`}
                data-is-active={activeIndex === index}>
                <button
                  onClick={() => handleNavLink(index)}
                  type='button'
                  className={styles.navBtn}>
                  {label}
                </button>
                <div className={styles.navListWrap}>
                  <ul className={styles.navList}>
                    {getSubItems(label).map((subItem: string) => (
                      <li key={subItem} className={styles.navListItem}>
                        <a href='#' className={styles.navListLink}>
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.footer}>
            <div className={styles.lang}>
              <GlobeIcon />
              <ul className={styles.langList}>
                <li className={styles.langItem}>
                  <input
                    type='radio'
                    checked={lang === 'EN'}
                    onChange={() => setLang('EN')}
                    name='lang'
                    className={styles.langInput}
                  />
                  <span className={styles.langTxt}>EN</span>
                </li>
                <li className={styles.langItem}>
                  <input
                    type='radio'
                    checked={lang === 'RU'}
                    onChange={() => setLang('RU')}
                    name='lang'
                    className={styles.langInput}
                  />
                  <span className={styles.langTxt}>RU</span>
                </li>
              </ul>
            </div>
            <a aria-label='Account button' href='#' className={styles.account}>
              <span className={styles.accountTxt}>Account</span>
              <AccountIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
