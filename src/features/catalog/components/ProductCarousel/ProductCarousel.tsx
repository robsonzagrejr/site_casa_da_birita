import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ProductCard, Product } from '../ProductCard/ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './ProductCarousel.module.css';

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
        className={styles.swiper}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className={styles.swiperSlide}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
