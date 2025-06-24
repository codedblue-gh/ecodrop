import styles from './Header.module.scss';
import { CartIcon } from '../ui/icons/CartIcon';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { useEffect, useRef, useState } from 'react';
import { Menu } from '../Menu/Menu';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const html = document.documentElement;
    const mediaQuery = window.matchMedia('(max-width: 49em)');

    if (isMenuOpen && mediaQuery.matches) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      html.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      data-show-menu={isMenuOpen}
      className={`${styles.header} _has-bg`}>
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
        <Link to='/' className={styles.logo}>
          <Logo className={styles.logoImg} />
        </Link>
        <Link to='/cart' aria-label='Cart link' className={styles.cart}>
          <CartIcon />
        </Link>
      </div>
      <Menu onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};
