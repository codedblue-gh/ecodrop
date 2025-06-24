import { useState } from 'react';
import styles from './Menu.module.scss';
import { GlobeIcon } from '../ui/icons/GlobeIcon';
import { AccountIcon } from '../ui/icons/AccountIcon';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface MenuProps {
  onClose: () => void;
}

export const Menu = ({ onClose }: MenuProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t, i18n } = useTranslation();

  const menuLabels = ['products', 'about', 'support'];

  const handleNavLink = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const getSubLink = (label: string, item: string): string => {
    if (label === 'products') return `/products/${slugify(item)}`;
    const base = label.replace(/\s+/g, '-').toLowerCase();
    return `/${base}/${slugify(item)}`;
  };

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9а-яё]+/gi, '-')
      .replace(/^-+|-+$/g, '');

  return (
    <div className={`${styles.menu} menu`}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <ul className={styles.nav}>
            {menuLabels.map((labelKey, index) => {
              const subItems = t(`menu.${labelKey}List`, {
                returnObjects: true,
              }) as string[];

              if (!Array.isArray(subItems)) return null;

              return (
                <li
                  key={labelKey}
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
                    {t(`menu.${labelKey}`)}
                  </button>
                  <div className={styles.navListWrap}>
                    <ul className={styles.navList}>
                      {subItems.map((item: string) => (
                        <li key={item} className={styles.navListItem}>
                          <Link
                            to={getSubLink(labelKey, item)}
                            onClick={() => {
                              setActiveIndex(null);
                              onClose();
                            }}
                            className={styles.navListLink}>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.footer}>
            <div className={styles.lang}>
              <GlobeIcon />
              <ul className={styles.langList}>
                <li className={styles.langItem}>
                  <input
                    type='radio'
                    onChange={() => i18n.changeLanguage('en')}
                    checked={i18n.language === 'en'}
                    name='lang'
                    className={styles.langInput}
                  />
                  <span className={styles.langTxt}>EN</span>
                </li>
                <li className={styles.langItem}>
                  <input
                    type='radio'
                    onChange={() => i18n.changeLanguage('ru')}
                    checked={i18n.language === 'ru'}
                    name='lang'
                    className={styles.langInput}
                  />
                  <span className={styles.langTxt}>RU</span>
                </li>
              </ul>
            </div>
            <Link
              aria-label='Account button'
              to='/account'
              className={styles.account}>
              <span className={styles.accountTxt}>{t('menu.account')}</span>
              <AccountIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
