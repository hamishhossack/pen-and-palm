import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>About | Pen & Palm</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header font-family-secondary text-uppercase mb-4">
              Ilona Hossack-Smyth
            </h2>
            <p className="font-size-subheader text-justify mb-4">
              I am a proud small business owner based in South East London, who has always had a
              keen interest in design and stationery. My calligraphy journey began whilst planning
              my own wedding - I learnt so that I could create our wedding stationery and on-the-day
              signage.
            </p>
            <p className="font-size-subheader text-justify mb-4">
              Having totally falling in love with weddings, I quickly immersed myself in all things
              design and printing techniques (including learning the ancient art of letterpress), so
              that I could help other couples bring their dream invitations and finishing touches to
              life.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-3">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/ilona.jpg" alt="Ilona" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Row */}
      <div className="row">
        <div className="col-12 offset-lg-1 col-lg-3">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img
                src="/images/ilona.jpg"
                alt="Ilona"
                width="350"
                height="500"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <p className="font-size-subheader text-justify mb-4">
              When I&apos;m not designing or writing, I work as a music lawyer, and music continues
              to be one of the most important things in my life. However, I&apos;m glad to have
              reclaimed my creative flair and am finally putting my Graphic Design and Art GCSES in
              practice!
            </p>
            <p className="font-size-subheader text-justify mb-4">
              Additionally, I have the pleasure of teaching modern calligraphy workshops (link to
              workshops tab, below) for beginners at local shop, Beldi Maison.
            </p>
            <p className="font-size-subheader text-justify mb-4">
              I can only take on a limited number of weddings per year, so please get in touch if
              you have any questions <Link href="/contact">contact me</Link> - I&apos;d love to work
              with you.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
