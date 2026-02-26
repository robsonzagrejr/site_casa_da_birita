import React from 'react';
import { PromotionalBanner } from '../../../shared/components/PromotionalBanner';
import { ProductCarousel } from '../../catalog/components/ProductCarousel/ProductCarousel';
// Note: The specific HomePage styles are now minimal, as component styles are encapsulated.
// import styles from './HomePage.module.css';

const products = [
  {
    id: 1,
    name: 'Cerveja Artesanal IPA',
    price: 'R$ 24,90',
    imageUrl: 'https://placehold.co/400x400/222/FFF?text=IPA',
  },
  {
    id: 2,
    name: 'Vinho Tinto Cabernet',
    price: 'R$ 79,90',
    imageUrl: 'https://placehold.co/400x400/222/FFF?text=Vinho',
  },
  {
    id: 3,
    name: 'Gin Tônica Premium',
    price: 'R$ 89,90',
    imageUrl: 'https://placehold.co/400x400/222/FFF?text=Gin',
  },
  {
    id: 4,
    name: 'Whisky Single Malt 12 Anos',
    price: 'R$ 299,90',
    imageUrl: 'https://placehold.co/400x400/222/FFF?text=Whisky',
  },
  {
    id: 5,
    name: 'Licor Fino de Chocolate',
    price: 'R$ 59,90',
    imageUrl: 'https://placehold.co/400x400/222/FFF?text=Licor',
  },
  {
    id: 6,
    name: 'Espumante Brut Rosé',
    price: 'R$ 69,90',
    imageUrl: 'https://placehold.co/400x400/222/FFF?text=Espumante',
  },
];

export function HomePage() {
  return (
    <>
      <PromotionalBanner />
      <ProductCarousel products={products} />
    </>
  );
}

