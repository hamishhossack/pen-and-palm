import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

const images = [
  '/images/home-2.jpg',
  '/images/home-4.jpg',
  '/images/home-3.jpg',
  '/images/home-1.jpg',
];

export default function HeroSection() {
  return (
    <div className="hero-section position-relative">
      <Swiper
        slidesPerView={1}
        watchOverflow={false}
        autoplay={{ delay: 1000 }}
        loop
        modules={[Autoplay, EffectFade]}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div
              className="hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5"
              style={{
                backgroundImage: `url("${image}")`,
              }}
            >
              <p className="font-size-display5 font-family-secondary mb-4 text-center hero-header">
                Calligraphy, signage & stationery
              </p>
              <p className="text-transform-uppercase font-size-title mb-5 text-center hero-subheader">
                Beautifully bespoke and uniquely you
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
