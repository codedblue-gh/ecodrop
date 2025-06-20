import styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import { CartIcon } from '../ui/icons/CartIcon';
import { useEffect, useRef, useState } from 'react';
import { Menu } from '../Menu/Menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const mediaQuery = window.matchMedia('(max-width: 49em)');

    if (isMenuOpen && mediaQuery.matches) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
    }

    return () => {
      html.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header data-show-menu={isMenuOpen} className={styles.header}>
      <div className={styles.container}>
        <button
          aria-label='Menu button'
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type='button'
          className={styles.menuBtn}>
          <svg
            width='25'
            height='20'
            viewBox='0 0 25 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect y='5.5' width='25' height='1' fill='white' />
            <rect y='13' width='25' height='1' fill='white' />
          </svg>
        </button>
        <a href='#' className={styles.logo}>
          <img src={logo} alt='EcoDrop' className={styles.logoImg} />
        </a>
        <a aria-label='Cart button' href='#' className={styles.cart}>
          <CartIcon />
        </a>
      </div>
      <Menu reference={menuRef} />
    </header>
  );
};
