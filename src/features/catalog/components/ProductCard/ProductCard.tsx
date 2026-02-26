import React from 'react';
import styles from './ProductCard.module.css';

export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>{product.price}</p>
      </div>
      <button className={styles.addToCartButton}>Adicionar ao Carrinho</button>
    </div>
  );
}
