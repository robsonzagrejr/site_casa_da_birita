import React from 'react';
import { ProductCard, Product } from './ProductCard';
import { Carousel } from '../../../shared/components';

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <Carousel
      items={products}
      renderItem={(product) => <ProductCard product={product} />}
      swiperProps={{
        slidesPerView: 5,
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
          1200: { slidesPerView: 5, spaceBetween: 24 },
        },
      }}
    />
  );
}
