import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import SocialMedia from '../components/common/SocialMedia';
import ContactBanner from '../components/productAssets/ContactBanner';
import HeroSection from '../components/homepage/HeroSection';
import HomeBanner from '../components/homepage/HomeBanner';
import QuoteBanner from '../components/homepage/QuoteBanner';
import AsSeenInBanner from '../components/homepage/AsSeenInBanner';
import ServiceBanner from '../components/homepage/ServiceBanner';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Home | Pen & Palm</title>
    </Head>

    <HeroSection />
    <HomeBanner />
    <ServiceBanner />
    <ContactBanner />
    <QuoteBanner />
    <SocialMedia />
    <AsSeenInBanner />
    <Footer />
  </Root>
);

export default Home;
