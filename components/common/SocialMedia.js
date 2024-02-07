import React from 'react';
import { EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const imagesInfo = [
  {
    image: '/images/insta/1.jpg',
  },
  {
    image: '/images/insta/2.jpg',
  },
  {
    image: '/images/insta/3.jpg',
  },
  {
    image: '/images/insta/4.jpg',
  },
  {
    image: '/images/insta/5.jpg',
  },
];

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="pt-5">
        <div className="custom-container px-3 mb-5">
          <div className="row">
            <Swiper
              className="w-100"
              slidesPerView={5}
              watchOverflow={false}
              autoplay={true}
              loop={true}
              allowTouchMove
              speed={300}
              modules={[EffectCreative]}
            >
              {imagesInfo.map((item, i) => (
                <SwiperSlide key={item.image}>
                  <a
                    href="https://www.instagram.com/penandpalm/"
                    className="col-md col-sm-6 pb-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      style={{
                        paddingBottom: '100%',
                        background: `url("${item.image}") center center/cover`,
                      }}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </footer>
    );
  }
}
