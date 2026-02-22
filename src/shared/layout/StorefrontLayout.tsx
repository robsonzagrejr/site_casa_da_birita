import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './StorefrontLayout.module.css';
import { ThemeToggle } from '../components/ThemeToggle';

export function StorefrontLayout() {

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          Casa da Birita
        </Link>
        <nav className={styles.nav}>
          <Link to="/collections/promocoes" className={styles.navLink}>
            Promoções
          </Link>
          <Link to="/collections/mais-vendidos" className={styles.navLink}>
            Mais vendidos
          </Link>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ThemeToggle />
          <button className={styles.cartIcon} aria-label="Carrinho">
            🛒
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <small>© {new Date().getFullYear()} Casa da Birita</small>
      </footer>
    </div>
  );
}

