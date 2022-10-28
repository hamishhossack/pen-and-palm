import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import ContactBanner from '../components/productAssets/ContactBanner';

const About = () => (
  <Root>
    <Head>
      <title>Contact | Pen & Palm</title>
    </Head>
    <div>
      <ContactBanner />
    </div>
    <Footer />
  </Root>
);

export default About;
