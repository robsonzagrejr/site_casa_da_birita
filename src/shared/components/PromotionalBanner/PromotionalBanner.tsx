import React from 'react';
import styles from './PromotionalBanner.module.css';

export function PromotionalBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h2 className={styles.title}>Promoções de Inverno</h2>
        <p className={styles.subtitle}>Vinhos e destilados com até 30% de desconto.</p>
        <button className={styles.ctaButton}>Conferir Agora</button>
      </div>
    </div>
  );
}
