import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import ContactBanner from '../components/productAssets/ContactBanner';
import Collections from '../components/collections/Collections';
import SocialMedia from '../components/common/SocialMedia';
import Footer from '../components/common/Footer';

const Home = () => (
  <Root>
    <Head>
      <title>Collection</title>
    </Head>
    <Collections />
    <ContactBanner />
    <SocialMedia />
    <Footer />
  </Root>
);

export default Home;
