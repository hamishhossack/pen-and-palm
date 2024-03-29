import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import ContactBanner from '../components/productAssets/ContactBanner';

const Contact = () => (
  <Root>
    <Head>
      <title>Contact | Pen & Palm</title>
    </Head>
    <div>
      <ContactBanner formName="contact-form" />
    </div>
    <Footer />
  </Root>
);

export default Contact;
