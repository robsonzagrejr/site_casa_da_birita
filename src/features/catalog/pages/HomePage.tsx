import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { Trolley } from '../../trolley/Trolley';

export function HomePage() {
  return (
    <section>
      <h1>Bem-vindo à Casa da Birita</h1>
      <p>Escolha suas bebidas favoritas e receba em casa.</p>

      <div className={styles.featured}>
        <h2>Destaques</h2>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Cerveja Pilsen 600ml</h3>
            <p>R$ 9,90</p>
            <Link to="/products/1" className={styles.link}>
              Ver detalhes
            </Link>
          </article>
          <article className={styles.card}>
            <h3>Gin Premium 750ml</h3>
            <p>R$ 89,90</p>
            <Link to="/products/2" className={styles.link}>
              Ver detalhes
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

