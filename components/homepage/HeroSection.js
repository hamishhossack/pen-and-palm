import React from 'react';
import { Autoplay, EffectFade, Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const params = {
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
};
const images = [
  '/images/home-1.jpg',
  '/images/home-2.jpg',
  '/images/home-3.jpg',
  '/images/home-4.jpg',
];

export default function HeroSection() {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <div className="hero-section position-relative">
      <Swiper {...params}>
        {images.map((image, index) => (
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
