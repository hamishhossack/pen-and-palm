import React from 'react';
import Link from 'next/link';
import ServicesBlock from '../services/ServicesBlock';

export default function ServiceBanner() {
  return (
    <ServicesBlock img="home-service" bg="bg-brand600" imgLeft>
      <p
        className="font-size-display1 font-family-secondary mt-5 text-center mx-auto"
        style={{ maxWidth: '53rem' }}
      >
        From calligraphy pieces and luxury wedding invitations to hand-painted signage, I can help
        with all your stationery needs to elevate your special day or event.
      </p>
      <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <Link href="/services">
          <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
            <p className="mr-3">Services</p>
            <img alt="arrow" src="/icon/arrow-long-right.svg" />
          </a>
        </Link>
      </div>
    </ServicesBlock>
  );
}
