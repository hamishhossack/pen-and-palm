import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import QuoteBanner from '../components/homepage/QuoteBanner';

const params = {
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 1500,
  },
  loop: true,
  allowTouchMove: false,
  speed: 500,
  effect: 'coverflow',
};

const About = () => (
  <Root>
    <Head>
      <title>About | Pen & Palm</title>
    </Head>
    <div>
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-5 offset-lg-1 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header font-family-secondary text-uppercase mb-4">
              Ilona Hossack-Smyth
            </h2>
            <p className="font-size-subheader mb-4">
              I am a proud small business owner based in South East London, who has always had a
              keen interest in design and stationery. My calligraphy journey began whilst planning
              my own wedding - I learnt so that I could create our wedding stationery and on-the-day
              signage.
            </p>
            <p className="font-size-subheader mb-4">
              Having totally falling in love with weddings, I quickly immersed myself in all things
              design and printing techniques (including learning the ancient art of letterpress), so
              that I could help other couples bring their dream invitations and finishing touches to
              life.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-5 align-center">
          <div className="about-image my-lg">
            <img
              src="/images/about-ilona-shoot.jpeg"
              alt="About Ilona - placement"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Row */}
      <div className="row bg-brand300">
        <div className="col-12 col-lg-5 offset-lg-1 row-content overflow-hidden align-center">
          <div className="about-image my-lg">
            <img src="/images/about-table.jpeg" alt="About Ilona - table" layout="intrinsic" />
          </div>
        </div>
        <div className="py-5 col-12 col-md-10 col-lg-5 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <p className="font-size-subheader mb-4">
              When I&apos;m not designing or writing, I work as a music lawyer, and music continues
              to be one of the most important things in my life. However, I&apos;m glad to have
              reclaimed my creative flair and am finally putting my Graphic Design and Art GCSES in
              practice!
            </p>
            <p className="font-size-subheader mb-4">
              Additionally, I have the pleasure of teaching modern calligraphy workshops (link to
              workshops tab, below) for beginners at local shop, Beldi Maison.
            </p>
            <p className="font-size-subheader mb-4">
              I can only take on a limited number of weddings per year, so please get in touch if
              you have any questions <Link href="/contact">contact me</Link> - I&apos;d love to work
              with you.
            </p>
          </div>
        </div>
      </div>

      {/* Row */}
      <div className="row py-5">
        <div className="col-12 row-content">
          <h2 className="text-center font-size-header font-family-secondary text-uppercase">
            Wonderful Words
          </h2>
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <Swiper {...params} style={{ height: '300px' }}>
              <SwiperSlide>
                <QuoteBanner
                  quote="Our guests absolutely loved all the work Ilona had done and it made our day extra special! 100% recommend! The best of the best!"
                  by="AS"
                />
              </SwiperSlide>
              <QuoteBanner
                quote="Not only is Ilona talented but a lovely human being. The finish on the designs was great, and we were really happy with the end result."
                by="CJ"
              />
              <SwiperSlide>
                <QuoteBanner
                  quote="I've first hand seen the gorgeous work of Ilona for a few different weddings. Communication, interpretation and end product are all perfect. Ilona is so talented she can work in many different styles too. Will always be my stationery go to."
                  by="EJ"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
