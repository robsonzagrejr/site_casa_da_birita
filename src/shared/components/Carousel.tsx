import React from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box, SxProps, Theme } from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    swiperProps?: Partial<SwiperProps>;
    sx?: SxProps<Theme>;
    pauseOnMouseEnter?: boolean;
}

export function Carousel<T>({
    items,
    renderItem,
    swiperProps = {},
    sx = {},
    pauseOnMouseEnter = true,
}: CarouselProps<T>) {
    const swiperRef = React.useRef<any>(null);

    const defaultSwiperProps: SwiperProps = {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 24,
        slidesPerView: 1,
        navigation: true,
        pagination: { clickable: true },
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: pauseOnMouseEnter,
        },
        ...swiperProps,
        onSwiper: (swiper) => {
            swiperRef.current = swiper;
            if (swiperProps.onSwiper) {
                swiperProps.onSwiper(swiper);
            }
        },
    };

    return (
        <Box
            onFocus={() => swiperRef.current?.autoplay?.stop()}
            onBlur={() => swiperRef.current?.autoplay?.start()}
            sx={{
                position: 'relative',
                width: '100%',
                // Correct Swiper navigation colors to match theme
                '& .swiper-button-next, & .swiper-button-prev': {
                    color: 'primary.main',
                },
                '& .swiper-pagination-bullet-active': {
                    color: 'primary.main',
                    bgcolor: 'primary.main',
                },
                ...sx
            }}
        >
            <Swiper {...defaultSwiperProps} style={{ padding: '20px 0 40px', ...defaultSwiperProps.style }}>
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
